<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            "Admin",
            "Doctor",
            "Patient",
            "Enfermo"
        ];

        foreach ($roles as $role) {
            \Spatie\Permission\Models\Role::create([
                'name' => $role,
            ]);
        }

        Permission::create(['name' => 'patients.index'])->syncRoles(['Admin', 'Doctor']);
        Permission::create(['name' => 'patients.create'])->syncRoles(['Admin', 'Doctor']);
        Permission::create(['name' => 'patients.edit'])->syncRoles(['Admin', 'Doctor']);
        Permission::create(['name' => 'patients.destroy'])->syncRoles(['Admin', 'Doctor']);
        
    }
}
