export interface User {
	email?: string;
	password?: string;
	username?: string;
	handle?: string;
}

export default function useAuth() {
	return {
		getUser() {
			return JSON.parse(localStorage.getItem("user") || "{}") as User;
		},

		removeUser() {
			localStorage.removeItem("user");
		},

		verifyUser() {
			return true;
		},

		verifyEmail() {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");

			console.log("Is email available -", user.email !== undefined);

			if (user.email !== undefined) console.log("Registered as -", user.email);

			return user.email !== undefined;
		},

		verifyPassword() {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");

			console.log("Is password available -", user.password !== undefined);

			if (user.password !== undefined) console.log("Password set to -", user.password);

			return user.password !== undefined;
		},

		async buildEmail(email: string) {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");

			return await new Promise((resolve, reject) => {
				if (email === "") return reject("Email is required");

				if (!email.includes("@")) return reject("Email is invalid");

				user.email = email;

				localStorage.setItem("user", JSON.stringify(user));

				console.log(user);
				console.log(JSON.parse(localStorage.getItem("user") || "{}"));

				resolve("User registered successfully");
			});
		},

		async buildPassword(password: string, confirmPassword: string) {
			const user: User = JSON.parse(localStorage.getItem("user") || "{}");

			return await new Promise((resolve, reject) => {
				if (password === "") return reject("Password is required!");

				if (confirmPassword === "") return reject("Confirm password is required!");

				if (password !== confirmPassword) return reject("Passwords does not match!");

				if (password.length < 6) return reject("Password must be at least 6 characters!");

				user.password = confirmPassword;

				localStorage.setItem("user", JSON.stringify(user));

				console.log(user);
				console.log(JSON.parse(localStorage.getItem("user") || "{}"));

				resolve("User registered successfully");
			});
		},
	};
}
