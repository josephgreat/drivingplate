<template>
  <div class="bg-[#2e2e2e]">
    <JumbotronWrapper bg="librarybg" title="library" bgcolor="transparent" />
    <main
      class="max-w-[1700px] mx-auto py-12 px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0"
    >
      <section class="pb-28 tracking-[.02em]">
        <p class="my-5 text-center">
          Over 11,000 clip sets from around the world are available for preview
          below.
        </p>
        <p class="my-5 text-center">
          If you are interested in purchasing a clip set, please
          <a href="" class="link">contact us</a> and we can send you the full
          res, watermarked files for preview. Please allow 48 hours for
          delivery.
        </p>
        <p class="my-5 text-center">
          Please note that items that are available in
          <strong>4K are also available in HD</strong>; those listed in HD are
          only available in that format as they are a part of our Legacy
          Collection that started when HD was the highest resolution available.
        </p>
        <p class="mt-5 mb-14 text-center">
          Keep checking back as our library is growing on a consistent basis!
        </p>
        <p class="my-5 text-center">
          If you can't find what you are looking for, feel free to reach out and
          we will do our best to help!
        </p>
        <p class="my-5 text-center">
          <a href="" class="link">contact@drivingplates.com</a>
        </p>
      </section>
      <section class="pb-28 tracking-[.02em]">
        <div class="flex flex-wrap justify-between md:justify-normal">
          <div class="ml-[35px] w-full sm:w-[25%]">
            <h2
              class="uppercase font-extrabold my-5 sm:tracking-[.15em] tracking-[.02em]"
            >
              united states
            </h2>
            <library-links title="alabama" :links="['Trussville']" />
            <library-links
              title="arizona"
              :links="['Arizona Hwy', 'Flagstaff', 'Phoenix']"
            />
            <library-links
              title="california"
              :links="[
                'Beverly Hills',
                'Big Bear',
                'Burbank',
                'Diamond Bar',
                'Echo Park',
                'Griffith Park',
                'Hancock Park',
                'Hollywood Hills',
                'Lancaster',
                'Long Beach',
                'Burbank',
                'Diamond Bar',
                'Echo Park',
                'Griffith Park',
                'Hancock Park',
                'Hollywood Hills',
                'Lancaster',
                'Long Beach',
                'Burbank',
                'Diamond Bar',
                'Echo Park',
                'Griffith Park',
                'Hancock Park',
                'Hollywood Hills',
                'Lancaster',
              ]"
            />
            <library-links
              title="colorado"
              :links="['Denver', 'Grand Junction', 'Norwood']"
            />
            <library-links
              title="florida"
              :links="[
                'Central Florida',
                'Coconut Grove',
                'Coral Gables',
                'Jacksonville',
                'Miami',
                'Miramar',
              ]"
            />
            <library-links
              title="georgia"
              :links="['Atlanta', 'Morgan County', 'Savannah']"
            />
            <library-links title="idaho" :links="['McCammon', 'Wayan']" />
            <library-links title="iowa" :links="['Clinton']" />
            <library-links title="louisiana" :links="['new', 'orleans']" />
            <library-links title="maryland" :links="['baltimore']" />
            <library-links
              title="MASSACHUSETTS"
              :links="['boston', 'northampton', 'salem']"
            />
            <library-links
              title="MICHIGAN"
              :links="['Detroit', 'Elk Rapids', 'Suttons Bay', 'Traverse City']"
            />
            <library-links title="MINNESOTA" :links="['minneapolis']" />
            <library-links title="missouri" :links="['st. louis']" />
            <library-links
              title="nevada"
              :links="['las vegas', 'valley of fire']"
            />
            <library-links
              title="new jersey"
              :links="['Newark', 'Newark Airport', 'Palisades Parkway']"
            />
            <library-links
              title="new york"
              :links="[
                '5th Ave',
                'Central Park',
                'College Point',
                'FDR',
                'JKF Airport',
                'Lexington Ave.',
                'New York',
                'Park Ave',
                'Queens',
                'Riverside Dr',
                'Upstate',
                'Westside Hwy',
              ]"
            />
            <library-links
              title="NORTH CAROLINA"
              :links="['charlotte', 'maggie valley']"
            />
            <library-links title="ojio" :links="['cleveland']" />
            <library-links
              title="oregon"
              :links="['bend', 'portland', 'sisters']"
            />
            <library-links
              title="PENNSYLVANIA"
              :links="['philadelphia', 'pittsburgh']"
            />
            <library-links title="rhode island" :links="['providence']" />
            <library-links title="south carolina" :links="['blue ridge hwy']" />
            <library-links title="south carolina" :links="['blue ridge hwy']" />
            <library-links
              title="utah"
              :links="['salt lake city', 'solitude']"
            />
            <library-links
              title="vermont"
              :links="['Hartland', 'Montpelier', 'Stowe', 'Vermont Hwys']"
            />
            <library-links
              title="washington"
              :links="[
                'Aberdeen',
                'Centralia',
                'Gray\'s Harbor',
                'Olympic Nat\'l Park',
                'Seattle',
                'Yelm',
              ]"
            />
            <library-links
              title="washington, D.C."
              :links="['georgeto', 'washington, D.C.']"
            />
            <library-links
              title="wyoming"
              :links="['Yellowstone Nat\'l Park']"
            />
          </div>
          <div class="ml-[35px] w-[25%]">
            <h2
              class="uppercase font-bold my-5 sm:tracking-[.15em] tracking-[.02em]"
            >
              united kingdom
            </h2>
            <library-links
              title="england"
              :links="[
                'Birkenhead',
                'Birmingham',
                'Bristol',
                'Cornwall',
                'Hungerford',
                'Leamington Spa',
                'Leeds',
                'Liverpool',
                'London',
                'London Hwys',
                'Manchester',
                'Newquay',
                'Norfolk',
                'North Norfolk',
                'Norwich',
                'Padstow',
                'Stowmarket',
                'Suffolk',
                'Surrey',
                'Sussex',
                'Windsor',
                'A Road',
                'Motorway',
                'Tavistock',
                'Huddersfield',
              ]"
            />
            <library-links
              title="northern ireland"
              :links="['belfast', 'newry']"
            />
            <library-links
              title="scotland"
              :links="[
                'Anstruther Hwys',
                'Argyll and Bute',
                'Crail',
                'Edinburgh',
                'Fife',
                'Glencoe',
                'Highland',
                'Leven',
                'North Queensferry',
                'St. Andrews',
                'Stirling',
                'WALES',
                'Cardiff',
                'Monmouth',
              ]"
            />
          </div>
          <div class="ml-[35px] w-[25%]">
            <h2
              class="uppercase font-bold my-5 sm:tracking-[.15em] tracking-[.02em]"
            >
              international
            </h2>
            <library-links title="australia" :links="['sydney']" />
            <library-links title="belize" :links="['belize city']" />
            <library-links
              title="canada"
              :links="[
                'Vancouver',
                'Allsaw',
                'Barrie',
                'Dundas',
                'Haliburton',
                'Hamilton',
                'Ingoldsby',
                'Minden',
                'Orillia',
                'Ottawa',
                'Vankoughnet',
                'Gatineau',
                'Hudson',
                'Montreal',
              ]"
            />
            <library-links title="czech republic" :links="['prague']" />
            <library-links title="denmark" :links="['Copenhagen']" />
            <library-links
              title="france"
              :links="[
                'Aix-en-Provence',
                'Lyon',
                'Marseilles',
                'Paris',
                'So. France Country Rd.',
                'Southern France Highway',
                'Versailles',
              ]"
            />
            <library-links title="germany" :links="['berlin']" />
            <library-links title="ireland" :links="['dublin']" />
            <library-links
              title="italy"
              :links="[
                'Amalfi Coast',
                'Anzio',
                'Bari',
                'Bernalda',
                'Central Italy',
                'Florence',
                'Matera',
                'Metaponto',
                'Milan',
                'Rome',
                'Sorrento',
                'Southern Italy Highway',
              ]"
            />
            <library-links title="japan" :links="['osaka', 'tokyo']" />
            <library-links title="lithuania" :links="['vilnius']" />
            <library-links title="marianas" :links="['saipan']" />
            <library-links
              title="mexico"
              :links="['mexico city', 'tepoztlan']"
            />
            <library-links
              title="morocco"
              :links="[
                'Beach Highway',
                'Coastal Highway',
                'El Jadida',
                'Essaouira',
                'Fes',
                'Highways',
                'Ifrane',
                'Marrakech',
                'Merzouga',
                'Mountains',
                'Ouarzazate',
                'Rabat',
                'Safi',
                'Sale',
                'Tizi n\'Tichka Pass',
              ]"
            />
            <library-links
              title="netherlands"
              :links="['amsterdam', 'rotterdam']"
            />
            <library-links
              title="new zealand"
              :links="[
                'Lake Wakatipu',
                'Lower Hutt',
                'NZ S. Isle',
                'Queenstown',
                'Upper Hutt',
                'Wanaka',
                'Wellington',
              ]"
            />
            <library-links
              title="poland"
              :links="[
                'Czestochowa',
                'Highways',
                'Krakow',
                'Warsaw',
                'Zakopane',
              ]"
            />
            <library-links
              title="south africa"
              :links="[
                'Cape Town',
                'Clarens',
                'Dukuza',
                'Durban',
                'Gauteng',
                'Golden Gate Highlands',
                'Harrismith',
                'Hoffenthal',
                'Johannesburg',
                'Lankloof',
                'Mhlwazini',
                'Mooi River',
                'Mpumalanga',
                'Tweeling',
                'Villers',
                'Warden',
                'Winterton',
                'N3',
                'N3',
              ]"
            />
            <library-links
              title="south korea"
              :links="['incheon', 'paju', 'seoul']"
            />
            <library-links
              title="spain"
              :links="[
                'Barcelona',
                'Cardona',
                'Castelldefels',
                'Catalonia Motorway',
                'Garraf',
                'Ibiza',
                'Puigmolto',
                'Rat Penat',
                'Stiges',
              ]"
            />
            <library-links
              title="sweden"
              :links="['Gothenburg', 'Malmo', 'Stockholm']"
            />
            <library-links
              title="switzerland"
              :links="['geneva', 'lausanne', 'Nyon District']"
            />
            <library-links
              title="taiwan"
              :links="[
                'Kaohsiung',
                'Pingtung County',
                'Taipei',
                'Taitung County',
              ]"
            />
            <library-links title="thailand" :links="['bangkok']" />
            <library-links
              title="ukraine"
              :links="[
                'Highways',
                'Ivano-Frankivsk',
                'Kiev',
                'Lviv',
                'Voloshchyna',
              ]"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import JumbotronWrapper from "../JumbotronWrapper.vue";
import LibraryLinks from "../LibraryLinks.vue";
</script>
<style>
* {
  word-wrap: break-word;
}
</style>
