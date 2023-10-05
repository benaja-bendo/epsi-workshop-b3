<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
//        \App\Models\Category::factory(10)->create();
//        \App\Models\BonPlan::factory(10)->create();


        $arrayCategories = [
            'Loisirs',
            'Transport',
            'Sport',
            'Culture',
            'Nature',
            'Gastronomie',
            'Histoire',
            'Shopping',
            'Festivités',
            'Détente',
            'Aventure',
            'Religion',
            'Artisanat',
            'Musique',
            'Danse',
            'Peinture',
            'Sculpture',
            'Photographie',
            'Cinéma',
            'Littérature',
            'Théâtre',
            'Architecture',
            'Jardinage',
            'Cuisine',
            'Vins',
            'Pêche',
            'Chasse',
            'Randonnée',
            'Plongée',
            'Ski',
            'Equitation',
        ];
        foreach ($arrayCategories as $category) {
            \App\Models\Category::factory()->create([
                'name' => $category,
            ]);
        }

        $arrayBonPlans = [
            [
                'name' => "ABCD'ART",
                'description' => 'L’atelier 4 mains à 22€ (au lieu de 25€) et les ateliers 7-11 ans à 20€ (au lieu de 22€)',
                'category_id' => 1,
                'image' => 'data:image/png;base64,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',
                'price' => 10,
                'price_type' => '€',
                'address' => '28 rue Tillet- 33800 Bordeaux',
                'city' => 'Bordeaux',
                'zip_code' => '33000',
                'country' => 'France',
                'phone' => '06 23 04 02 73',
                'email' => 'contact@abcd-art.fr',
                'website' => 'https://cartejeune.bordeaux-metropole.fr/partenaires',
            ],
            [
                'name' => "Active Square",
                'description' => "69€/mois l'accès illimité à la salle de sport et aux cours collectifs",
                'category_id' => 3,
                'image' => "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSBhISEBIVFRUVGBYaGBgYGRMWGBYZHh8WFx8ZIBUYHyggHxonHRgVIjEiJSktLi4uHh8zODMsNygtLisBCgoKDg0OGBAPFy0ZHx0tKy0tMCstLSsrKy0tLS0tKy0tLTc3LSstLTc3Ky0rLS03KysrLTctNys3Kys3Ky0tK//AABEIAIEA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAD4QAAEDAgQDBQUECAcBAAAAAAEAAgMEEQUSITEGQVEHEyJhcRQygZHBYqGx0SMkQlJyouHwFjM3c3TC8RX/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIDAQACAwAAAAAAAAAAAQIDERIhMRNDUQQjMv/aAAwDAQACEQMRAD8A7iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgw1NQ2OAvcbAC5VMr+JJXyHuzkb5WJPqfyUpxnKRRxt5OJv8B/VQfD9A2auyvOgaSRtfUC33rMzO9PFnyXm/Cj2DH6hrvfzeTgCPzVufirW4W2ZwtcA25knkFrnhqnz3yH0zG35qG4wdaeOMaNa24HLe30TuFj6YqTNp21aziKd79HZB0A+u6UfEU7H6uzjoR9d1l4Zwtkz3mTUNtptcm+/yTiXCWwljowQ11wRyB9fP6Kd+uH9vD6bW3D61s1MHs2PzB6FbSqfBT3d5IP2bN9Af/PwVsWoncPfivN6RMvURFXQREQEVV4N42gxKWobAyRncFoJeGi4dnsRYn907q1ICIiAiIgIiICIiAiIgIiIPERRuOYgYKLOBckgDpc8z8kS1oiNyxcSYeZqDw+8w3Hn1H99FSaSodFUh7TYj+7FWPCOJXOqMs1rHZw018/Je8TYLcmaIa/tN6/aH1WZ77h4ssRkj6Y/YTWFYi2emzN0P7Q5g/kozi2gL6cSNFyy9x5dfhr81WMOrnQ1Ie34jkR0Kv9BWNmpg9mx+YPQpE7jTpjvGas1t6oWGYg6CpDm7bEciFfIJo56MEAOa7kRf4EdVV+I8F7txljHgO4/dP5LQwbFXQVF92H3h18x5qROupccd7Ybcb+L7BA1jLMaGjoBYLmOPcb4hLxlJQYTBG8w3zufzItmNy4BoBNvM+tl0+CZr4g5puDsVxXBcchw3taxI1rjG2TPZ2V7rZnMkbo0E2I+i2+hGtdJ3gzi3EZOPX0GId00sjcXNYBo6zHDxAnk5areMMWxHFqhuEsiZDA7LmflJfqQLl3M2JsBpzK0OCsYjrO2meohv3ckTsuYZSQ1sbL29QvexvGoKJ9dTVkzIXiQf5jg0HLdjgCeYI280E1Q8W1tXwXiDHU7G1dOCx4N2sLDcOcNffAbJsbXA62Wn2EVFWcNc0xsNJmkPeXvJ3to/Da/u28vip/CeMRieE4o2KEtZCx7WPzZu9zNlAIblFtGg2195Q/YNisP+HHU3et77vZH93fxFuWPxAdNCg84Y4pqKjBcWfTQU8M1PZzO6jt3hBkJzAk5nEMIHmVvYbx89/ZbLXvLe/jzsOlm96XAM8Po9ht6qM7Ch+uYr/uR/jOqNiuGzR8RzYJHpHNVxub5NIOU+mV7Cf4EHQK3j6qpuAaWomaySrq3O7tuXK1rORIG+hYbfa8lrV/FOM4a6GfEmQSU8jg1wZbMwkXtcc7A9RosXbph7Y6PDCA5sMLnxnLoWtIjtbzsx1vRQ3E9Fg8dBGRXVtYXuFo2TxOI0PiILNDysddUHeWPBaCNivpYKVmWmYLEWa0a7iw5rOgIiICIiAiIgIiIPOS1q6kbLTlj9j8weRCzSE5DbfWy517bK2rz53Zwdd9+hH0UmdOGbLFIiJjezEqB0NSWu+B5EdVPcNY1qIZT/AAO6/ZP0W9FkrsK8Qs4fyutuPJU+spXRVJY8WI2PIjqFnzuHkmJxWi1PJTfEmC5HGWMeHdw/d8x5fgozCMTdBU3GrT7zeo/NWThrFjNGYpNXAb/vN2181EcRYL3UmeMfoz/KenorP7hrJT8uNb4JmS0wc2xa4fd0KpXEWFiCqGX3H3t5W3H3rDhOLvgccviadS0nS/UdCvMWxN08wLgABsBt5pMxMGTNS9O/9JvgupJEkZ5WcPjofosPFsGEGtjfiXs3egDLnNnkX0uAblvrcLZ4NpC2F8h/asB6Dc/P8FQuIcCqIOOKurlwz/6MEwGXXM5mgHuWJuLW22tYq18er+Pv5xt0WkoaASjEIxCLR5RM1zQwRjldpy2G3wVcxqDh+rre8nkpHyG2rZsrnHYX7twzH1XPMcqqcdlGWhMzWPrQJGSkOLHZHPygsAuzwsI8wpjtN4UpKLDsPNLE1rjMwOfclzwBe5JPXVV2dSwkUNLUCipu5ieBm7lpAcRb3iNzpzK0sMwnDIuJ3+zshZVtBc5rDZwa61z3YNgDmHLmqu7/AF8H/G/6FRmITuj7VcZew2czD5HNPMERQEfegumHVmEUFTK2Gelhe8gyDvmlxcL7guNiLn5rYmOGOxCDEXug7x57uGYusHHxsyt1sTq8LmPDnClI/sjqKx8TXzlk7g8k3YWlwaAL25X+K1OImZuyLBwdnTPHzdMg7LPUUVbDPA58M7WAd624cGb2uRsdD5iyq+AYTw+zGm+ymmM4PhHfOk8XLKHuIJ6W1Wh2jYHBh3Z1UMoY+6EromyEF7nOGbmST6fEqp4lgE0nC0DYMGFO9ndubVe0QZnm3vG9j4t9TpyQd+RYKMuNIwv97K3N621+9Z0BERAREQEREBERB4oPGOH2zS52nI7npcH+ql6iXLTuda+UE25mwvZazq8e2xsbYiQOIdfTTppr80mNs3pFo1Z5hGHCClyA31uTtcr5xfCmTwWdo4bO3I/MLLJWWxBsVveFwb+ulvhv5haoxY+wtkMZGbkSW3Fr2GYAlx2AsLkdNVNJwrx466fGCYGIJC4uzOIte1gApaSMOYWuFwdxyWmKw+3PjDDdoJBNw06MNr2+1yvtryX2+rIw9smQknJ4QbnxEC1zbqrpa0isajxDVXCjS+8by0dCLgehuvaLhVjX3kcX+VrD481KMxIGSIBr7SXN7GzOmbTS+wuvH1+WnzPZbxPaADe5bmsBcDUlunqFOMMfDHvem+xoDQALAfABUPEeBalmPT1OHV5pjUEGRhjEgJ6gk9STtpc6q1z4nlknGQ/oml19QHWaHWGlufK+2ttL56etDi0aAuaHDW997gbXsq6qXF2Xw/4OkonTPc+SQSumIFxIBYEMvta4tfmdVQ+OuDHUNFRPmq5amUzsjGYnIxgFw1rCSRsOdvJdrOKAmHKARKCQb7WtpoDd2u3kVififhlLonAR83Ws7xObcb6aA3tz8kFc4w4BNZj0VZT1T6WZjQ1zmAkluuoIIINiR5hYuHezWOkx6ScTvlZLC6J7ZBmc4vLczjIDzttbnurc3Ev1mNmQ2ka0hw1aCQ82v6NWxSzOdES5tiC4WvmvlJF9hvZBzKm7HAGSxPr5zTnM5kTRlAcRo57blriNNgL25KUr+zcycJUVF7SAaV5fn7u+e5ebZM2nvdTsrdHin6OEujcDKdhc5BsC7QcywfHyX03ETneDE4BpdY6WdZ2TT7jqg+OJsFjrcElppbhsgGo3aQQ5rh6EBc/HZfVSQxU9Xib5KSItyxBpBLW6AXJ000G9uS6Sa0eK2pa9rSOYzENB9Nb/AAWq7F/1eR4ZfI9zLAvJNiRchrSRtyBQSbGgMAGgFvgF9r4YbsB62X2gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/2Q==",
                'price' => 69,
                'price_type' => '€',
                'address' => '35 avenue de Canteranne- 33600 Pessac',
                'city' => 'Bordeaux',
                'zip_code' => '33000',
                'country' => 'France',
                'phone' => '05 57 01 31 18',
                'email' => 'bienvenue@active-square.com',
                'website' => 'https://cartejeune.bordeaux-metropole.fr/partenaires',
            ],
            [
                'name' => "Active Square",
                'description' => "69€/mois l'accès illimité à la salle de sport et aux cours collectifs",
                'category_id' => 3,
                'image' => "data:image/jpeg;base64,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",
                'price' => 69,
                'price_type' => '€',
                'address' => '35 avenue de Canteranne- 33600 Pessac',
                'city' => 'Bordeaux',
                'zip_code' => '33000',
                'country' => 'France',
                'phone' => '05 57 01 31 18',
                'email' => 'bienvenue@active-square.com',
                'website' => 'https://active-square.com/',
            ],
            [
                'name' => "Auto-école ACSO",
                'description' => "1050€ le permis B : préparation au code, 22h de conduite + assistance juridique de 3 ans et 30€ de récupération sur le stage ",
                'category_id' => 2,
                'image' => "data:image/png;base64,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",
                'price' => 1050,
                'price_type' => '€',
                'address' => '8 place des Quinconces',
                'city' => 'Bordeaux',
                'zip_code' => '33000',
                'country' => 'France',
                'phone' => '05 57 01 31 18',
                'email' => 'ecoledeconduite@automobileclub-sudouest.com',
                'website' => 'https://active-square.com/',
            ],
        ];
        foreach ($arrayBonPlans as $bonPlan) {
            \App\Models\BonPlan::factory()->create([
                'name' => $bonPlan['name'],
                'category_id' => $bonPlan['category_id'],
                'description' => $bonPlan['description'],
                'image' => $bonPlan['image'],
            ]);
        }

        \App\Models\Association::factory(10)->create();

    }
}
