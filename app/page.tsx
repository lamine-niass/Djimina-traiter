"use client";

import {
  MessageCircle,
  MapPin,
  Truck,
  CalendarDays,
  Utensils,
  Star
} from "lucide-react";


export default function Home() {

const whatsapp =
"https://wa.me/221706058746?text=Bonjour%20DJIMINA%20TRAITEUR,%20je%20voudrais%20passer%20une%20commande";


return (

<div className="min-h-screen bg-orange-50 text-gray-800">


{/* HERO */}

<section className="relative bg-black text-white">

<img
src="/food.jpg"
className="absolute inset-0 w-full h-full object-cover opacity-50"
/>


<div className="relative px-6 py-32 text-center max-w-4xl mx-auto">


<h1 className="text-5xl md:text-6xl font-bold mb-5">
DJIMINA TRAITEUR 🍽️
</h1>


<p className="text-xl mb-8">
Des spécialités faites maison pour vos moments inoubliables ❤️
</p>


<p className="text-lg mb-8">
Fatayas • Nems • Pastels • Mini-pizzas • Beignets
</p>


<a
href={whatsapp}
className="bg-green-600 px-8 py-4 rounded-full font-bold inline-flex gap-2 items-center hover:scale-105 transition"
>

<MessageCircle/>
Commander sur WhatsApp

</a>


</div>

</section>




{/* PRESENTATION */}

<section className="py-16 px-6 max-w-5xl mx-auto text-center">


<h2 className="text-3xl font-bold mb-5">
Bienvenue chez DJIMINA TRAITEUR
</h2>


<p className="text-lg">

Nous préparons des produits savoureux et faits maison,
avec passion et qualité pour satisfaire vos envies
quotidiennes et vos grands événements.

</p>


</section>





{/* MENU */}


<section className="bg-white py-16 px-6">


<h2 className="text-3xl font-bold text-center mb-10">
Notre Menu 🍴
</h2>



<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">


<div className="p-8 rounded-2xl shadow bg-orange-50">

<Utensils className="text-orange-600 mb-4"/>

<h3 className="text-2xl font-bold mb-4">
Spécialités Salées 🥟
</h3>


<ul className="space-y-2">
<li>✓ Fatayas</li>
<li>✓ Nems</li>
<li>✓ Pastels</li>
<li>✓ Mini-pizzas</li>
<li>✓ Assortiments salés</li>
</ul>


</div>




<div className="p-8 rounded-2xl shadow bg-orange-50">


<Star className="text-orange-600 mb-4"/>


<h3 className="text-2xl font-bold mb-4">
Spécialités Sucrées 🍩
</h3>


<ul className="space-y-2">
<li>✓ Beignets</li>
<li>✓ Douceurs maison</li>
<li>✓ Commandes spéciales</li>
</ul>


</div>


</div>


</section>





{/* EVENEMENTS */}


<section className="py-16 px-6">


<h2 className="text-3xl font-bold text-center mb-10">
Vos événements 🎉
</h2>


<div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">


{[
"Anniversaires 🎂",
"Baptêmes 🕌",
"Réunions 🤝",
"Cérémonies 🎊"

].map((x)=>(

<div
key={x}
className="bg-white shadow p-6 rounded-xl text-center font-bold"
>
{x}

</div>


))}


</div>


</section>





{/* LIVRAISON */}


<section className="bg-orange-600 text-white py-16 px-6 text-center">


<Truck className="mx-auto mb-4"/>


<h2 className="text-3xl font-bold mb-4">
Livraison disponible 🚚
</h2>


<p className="text-lg">

Basés aux Parcelles Assainies U10 à Dakar,
nous livrons vos commandes partout au Sénégal.

</p>


</section>






{/* CONTACT */}


<section className="py-16 px-6 text-center">


<h2 className="text-3xl font-bold mb-6">
Contactez-nous 📲
</h2>


<div className="flex justify-center gap-3 mb-4">

<MapPin/>

<p>
Parcelles Assainies U10, Dakar
</p>

</div>



<a
href={whatsapp}
className="bg-green-600 text-white px-8 py-4 rounded-full inline-flex gap-2 items-center font-bold"
>

<MessageCircle/>
70 605 87 46

</a>


</section>




<footer className="bg-black text-white text-center py-6">

DJIMINA TRAITEUR ❤️  
<br/>
Le goût du fait maison

</footer>



</div>

)

}
