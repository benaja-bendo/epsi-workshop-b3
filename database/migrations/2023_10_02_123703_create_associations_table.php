<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('associations', function (Blueprint $table) {
            $table->id();
            $table->string('author');
            $table->foreignId('category_id')->constrained();
            $table->string('name');
            $table->longText('description');
            $table->text('image');
            $table->text('logo');
            $table->boolean('is_active')->default(true);
            $table->string('site-web')->nullable();
            $table->string('number')->nullable();
            $table->string('address')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('associations');
    }
};
