import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  
  restaurants: any[] = [
    {
      name: 'Restaurant 1',
      slug: 'restaurant-1',
      bannerImageUrl: 'https://example.com/banner-image-1.jpg',
      tagline: 'Delicious food for every craving at Restaurant 1',
      currency:'MXN'
    },
    {
      name: 'Restaurant 2',
      slug: 'restaurant-2',
      bannerImageUrl: 'https://example.com/banner-image-2.jpg',
      tagline: 'Taste the flavors of Restaurant 2',
      currency:'MXN'
    },{
      name: 'Carnitas Del Sur',
      bannerImageUrl: 'assets/carnitas-del-sur.jpg',
      tagline: 'Deliciosas carnitas preparadas al estilo sureño. Prepárate para el sabor',
      slug: 'carnitas-del-sur',
      currency:'MXN'
    }
    // Add more restaurants to the array as needed
  ];
  
  restaurant: any = {};

  items: any[] = [
    {
      name: 'Maciza Taco',
      imageUrl: 'https://lede-admin.lataco.com/wp-content/uploads/sites/45/surtido_carnitaselmomo.jpg',
      description: 'Un sabroso taco relleno de sabrosa maciza.',
      price: 15,
      type: 'food',
      currency:'MXN'
    },
    {
      name: 'Maciza Tacos x4',
      imageUrl: 'https://lede-admin.lataco.com/wp-content/uploads/sites/45/surtido_carnitaselmomo.jpg',
      description: 'Un orden de Maciza. Viene con 4 tacos.',
      price: 50,
      type: 'food',
      currency:'MXN'
    },
    {
      name: 'Maciza Quesadilla',
      imageUrl: 'https://img.texasmonthly.com/2020/01/Carnitas-Don-Raul-Quesadilla-Moreliana.jpg?auto=compress&crop=faces&fit=scale&fm=pjpg&h=683&ixlib=php-3.3.1&q=45&w=1024&wpsize=large',
      description: 'Quesadillas con queso y deliciosas.',
      price: 80,
      type: 'food',
      currency:'MXN'
    },
    {
      name: 'Maciza Torta',
      imageUrl: 'https://plazamundial.net/_storage/t_297a0a060a53afadb341e1d35354670f/CU19/cache.640x0.d5e1d6b246d94593b2d871df0b1956a4.png',
      description: 'Tortas mexicanas tradicionales llenas de sabor.',
      price: 70,
      type: 'food',
      currency:'MXN'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug')||'';
      this.setRestaurantBySlug(slug);
    });
  }

  setRestaurantBySlug(slug: string) {
    this.restaurant = this.restaurants.find(restaurant => restaurant.slug === slug);
    if (!this.restaurant) {
      // Handle the case when the slug doesn't match any restaurant
      // For example, navigate to a 404 page or display an error message
      this.router.navigate(['']);
    }
  }

  goBack() {
    this.router.navigate(['']);
  }

}
