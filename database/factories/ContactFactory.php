<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        // Laravel 很聰明，如果 create 時有帶 user_id 值， factory(User::class) 就不會建造
        'user_id' => factory(User::class),
        // 如果設定成這樣 每次都會 create
        // 'user_id' => factory(User::class)->create(),
        'name' => $faker->name,
        'email' => $faker->email,
        'birthday' => '05/14/1988',
        'company' => $faker->company,
    ];
});
