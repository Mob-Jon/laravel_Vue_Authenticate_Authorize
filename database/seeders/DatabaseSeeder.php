<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'user_role' => 'admin'
        ]);
        User::create([
            'name' => 'Tester',
            'email' => 'tester@test.com',
            'password' => Hash::make('tester'),
            'user_role' => 'tester'
        ]);
        User::create([
            'name' => 'Po',
            'email' => 'po@test.com',
            'password' => Hash::make('po'),
            'user_role' => 'requestor'
        ]);
    }
}
