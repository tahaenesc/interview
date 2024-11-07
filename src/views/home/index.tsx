// src/views/home/index.tsx
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
// import { useQuery } from "@tanstack/react-query";
// import fetchCharacters from "@/lib/fetchCharacters"; // Karakter verisi fonksiyonu
// import fetchLocations from "@/lib/fetchLocations"; // Lokasyon verisi fonksiyonu
// import fetchEpisodes from "@/lib/fetchEpisodes"; // Bölüm verisi fonksiyonu

// Server-side veri çekme ve prefetching işlemi
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await Promise.all([
  //   queryClient.prefetchQuery("character", fetchCharacters), // query key ve fetching function
  //   queryClient.prefetchQuery("locations", fetchLocations), // query key ve fetching function
  //   queryClient.prefetchQuery("episodes", fetchEpisodes), // query key ve fetching function
  // ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // Veriyi dehydratedState ile client'a aktar
    },
  };
};

// Home Page bileşeni
const HomePage = () => {
  // `useQuery`'de query key ve fonksiyon doğru şekilde geçmeli
  // const { data: charactersData, error: charactersError } = useQuery(
  //   "characters",
  //   fetchCharacters // Fonksiyonu buraya doğru şekilde geçiriyoruz
  // );
  // const { data: locationsData, error: locationsError } = useQuery(
  //   "locations",
  //   fetchLocations
  // );
  // const { data: episodesData, error: episodesError } = useQuery(
  //   "episodes",
  //   fetchEpisodes
  // );

  // Hata mesajları
  // if (charactersError || locationsError || episodesError) {
  //   return (
  //     <p>
  //       Hata oluştu:{" "}
  //       {charactersError?.message ||
  //         locationsError?.message ||
  //         episodesError?.message}
  //     </p>
  //   );
  // }

  // Yükleniyor durumu
  // if (!charactersData || !locationsData || !episodesData) {
  //   return <p>Yükleniyor...</p>;
  // }

  return (
    <div>
      <h1>Rick and Morty Verileri</h1>

      {/* <section>
        <h2>Karakterler</h2>
        <ul>
          {charactersData.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Lokasyonlar</h2>
        <ul>
          {locationsData.results.map((location) => (
            <li key={location.id}>{location.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Bölümler</h2>
        <ul>
          {episodesData.results.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      </section> */}
    </div>
  );
};

export default HomePage;
