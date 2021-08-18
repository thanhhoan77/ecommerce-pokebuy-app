import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import featuredCards from "../../pokemonsDB/featured.json";

export default function Featured() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div className="featured-container">
        <div className="title">
          <p>Featured Cards</p>
        </div>

        <main className="cards">
          {featuredCards.data.slice(0, 12).map((e) => (
            <Link key={e.id} href={`/home/explore/${e.id}`}>
              <div className="card">
                <section className="img-container">
                  <Image
                    src={e.images.large}
                    layout="fill"
                    objectFit="fit"
                    priority="true"
                    quality="100"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89OhSPQAIGwMHvnhFoQAAAABJRU5ErkJggg=="
                  />
                </section>
                <section>
                  <h3>{e.name}</h3>
                  <p> $ {e.cardmarket.prices.trendPrice} </p>
                </section>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </>
  );
}
