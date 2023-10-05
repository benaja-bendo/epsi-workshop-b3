<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Association>
 */
class AssociationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'category_id' => fake()->numberBetween(1, 10),
            'author' => fake()->name(),
            'description' => fake()->sentence(100),
            'image' => fake()->imageUrl(),
            'logo' => fake()->imageUrl(),
            'is_active' => fake()->boolean(),
            'site-web' => fake()->url(),
            'number' => fake()->phoneNumber(),
            'address' => fake()->address(),
        ];
    }
}
