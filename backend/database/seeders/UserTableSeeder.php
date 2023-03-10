<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'HRIS',
            'email'     => 'inosoft@gmail.com',
            'password'  => bcrypt('password')
        ]);
    }
}
