<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'=>"Zyone",
            'telephone'=>"11111111",
            'password'=>'$2y$10$CSet0inIlpMjBNfMA4wXy.GvkhwXy7ZZjqRpAzj/38Z98E5FJodB6',
        ]);
    }
}
