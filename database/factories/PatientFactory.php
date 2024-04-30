<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            /*       $table->string('name');
            $table->string('email')->unique();
            $table->date('date_of_birth');
            $table->string('phone');
            $table->string('address');
            $table->string('gender');
            $table->text('details'); */
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'date_of_birth' => $this->faker->date,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'gender' => $this->faker->randomElement(['Masculino', 'Femenino']),
            'details' => $this->faker->text,
        ];
    }
}
