export interface User {
	email?: string;
	password?: string;
	username?: string;
	handle?: string;
}

export default function useAuth() {
	return {
		verifyUser() {
			return localStorage.getItem("user") !== null;
		},

		verifyEmail() {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");

			console.log(user.email !== undefined);

			return user.email !== undefined;
		},

		getUser() {
			return JSON.parse(localStorage.getItem("user") || "{}") as User;
		},

		removeUser() {
			localStorage.removeItem("user");
		},

		async buildEmail(email: string) {
			return await new Promise((resolve, reject) => {
				if (email === "") reject("Email is required");

				if (!email.includes("@")) reject("Email is invalid");

				const user: User = JSON.parse(localStorage.getItem("user") || "{}");

				if (user.email !== undefined) user.email = email;

				localStorage.setItem("user", JSON.stringify({ email }));

				resolve("User registered successfully");
			});
		},

		async buildPassword(password: string) {
			return await new Promise((resolve, reject) => {
				if (password === "") reject("Password is required");

				if (password.length < 6) reject("Password must be at least 6 characters");

				const user: User = JSON.parse(localStorage.getItem("user") || "{}");

				if (user.password !== undefined) user.password = password;

				localStorage.setItem("user", JSON.stringify({ user }));

				resolve("User registered successfully");
			});
		},
	};
}
