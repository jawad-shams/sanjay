<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card
          outlined
          width="50%"
          class="px-4 pb-8 mt-12 mx-auto"
          v-for="(card, index) in cards"
          :key="index"
        >
          <v-card-title class="text-h5 font-weight-bold">{{
            card.title
          }}</v-card-title>
          <v-checkbox
            v-model="checkbox"
            label="collect-international-royalties"
            class="ml-3"
          ></v-checkbox>
          <v-list outlined rounded class="mt-4">
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-h6 font-weight-regular">
                all-territories-worldwide
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list outlined rounded class="mt-4">
            <v-list-item @click="showCountriesList(index)">
              <v-list-item-icon>
                <v-icon>mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-h6 font-weight-regular">
                all-with-exceptions
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list outlined rounded class="mt-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-flag-checkered</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-h6 font-weight-regular">
                us-only
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-btn
            v-for="(item, i) in card.countries"
            :key="i"
            outlined
            class="ma-2 pr-2"
            close
            @click:close="chip1 = false"
          >
            {{ item.countryName }}
            <v-icon class="ml-8" @click="removeCountry(index, i)">mdi-close</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-dialog v-model="showCountries" width="500">
        <v-card
          rounded
          width="100%"
          class="px-4 pb-8 "
          v-if="showCountries"
        >
          <v-card-title class="justify-center blue--text pb-0" @click="showCountries=false"
            >Close</v-card-title
          >
          <v-card-title class="justify-center text-h4 font-weight-bold fF"
            >DO NOT COLLECT IN</v-card-title
          >
          <v-row>
            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="12"
              v-for="(country, index) in modalList"
              :key="index"
            >
            <v-btn
           block
            outlined
            class="pr-2 btnBackground"
            close
            
           
          >
            {{ country.countryName }}
            <v-icon class="ml-16" @click="removeCountryFromModal(index)">mdi-close</v-icon>
          </v-btn>
          </v-col>
          </v-row>
          <v-row>
            
            <v-col
              cols="12"
              lg="6"
              md="6"
              sm="12"
              v-for="(country, index) in countries"
              :key="index"
            >
              <v-chip
                label
                outlined
                width="100%"
                :class="{ 'primary': lastClickedButtonIndex === index, '#8F8E93': lastClickedButtonIndex !== index }"
                class="pl-16"
                @click="addCountry(country, index), addCountryToModal(country, index)"
                >{{ country.countryName }}</v-chip
              >
            </v-col>
            <v-text-field
              outlined
              prepend-inner-icon="mdi-magnify"
              label="Other (Search here)"
              class="mx-3 mt-4"
              v-model="searchInput" @input="search"
            ></v-text-field>
           
          </v-row>
          
            <div  v-for="result in filteredResults" :key="result">
            <v-chip
                label
                outlined
                width="100%"
                color="#969696"
                class="pl-16"
               
                @click="addCountry(result), addCountryToModal(result)"
                >{{ result.countryName }}</v-chip
              >
            </div>
        </v-card>
      </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      showCountries:false,
      currentCardIndex: 0,
      searchInput: '',
      lastClickedButtonIndex: null,
      cards: [
        { title: "Performer - Performer 1", countries: [] },
        { title: "Performer - Performer 2", countries: [] },
        { title: "Right Owner - Right 1", countries: [] },
      ],
      modalList:[],
      countries: [
        { countryName: "Armenia" },
        { countryName: "Belgium" },
        { countryName: "Canada" },
        { countryName: "Denmark" },
        { countryName: "Ecuador" },
        { countryName: "France" },
        { countryName: "Greece" },
        { countryName: "India" },
        { countryName: "Italy" },
        { countryName: "Japan" },
        { countryName: "Latvia" },
        { countryName: "Netherlands" },
        { countryName: "Panama" },
        { countryName: "Peru" },
        { countryName: "Spain" },
        { countryName: "Ukraine" },
        { countryName: "Uruguay" },
        { countryName: "Brazil" },
        { countryName: "Australia" },
        { countryName: "Dominician Republic" },
        { countryName: "Cyprus" },
        { countryName: "Germany" },
        { countryName: "Finland" },
        { countryName: "Ireland" },
        { countryName: "Hungry" },
        { countryName: "Korea (South)" },
        { countryName: "Jamaica" },
        { countryName: "New Zealand" },
        { countryName: "Mexico" },
        { countryName: "Paraguay" },
        { countryName: "Russia" },
        { countryName: "Sweden" },
        { countryName: "United Kingdom" },
        { countryName: "Venezuela" },
      ],
    };
  },
  methods: {
    showCountriesList(cardIndex) {
      this.showCountries = true;
      this.currentCardIndex = cardIndex;
      this.modalList=[]
    },
    addCountry(country, index) {
      if (this.lastClickedButtonIndex !== null) {
        this.$set(this.countries[this.lastClickedButtonIndex], 'colorClass', '#8F8E93');

      }
      this.$set(this.countries[index], 'colorClass', '#E1E1F9');

// Update the lastClickedButtonIndex
this.lastClickedButtonIndex = index;
      

      // this.countries[index].color = 'primary';
      if (this.cards[this.currentCardIndex].countries.indexOf(country) !== -1) {
        console.log("Item exists in the array.");
      } else {
        this.cards[this.currentCardIndex].countries.push(country);
        this.modalList.push(country)
        console.log(this.modalList)
      }
    },
    removeCountry(index, i) {
      console.log(index, i);
      this.cards[index].countries.splice(i, 1);
    },
    addCountryToModal(country){
      if (this.modalList.indexOf(country) !== -1) {
        console.log("Item exists in the array.");
      } else {
        this.modalList.push(country)
      }
    },
    removeCountryFromModal(index) {
      this.modalList.splice(index, 1);
      console.log(this.modalList)
    },
    
  },
  computed: {
        filteredResults() {
          const searchInput = this.searchInput?.toLowerCase();
          return this.countries.filter(item => item?.countryName.toLowerCase()==searchInput);
        }
      },
};
</script>

<style>
.v-label {
  font-size: 20px !important;
  font-weight: 400 !important;
  color: #969696 !important;
}

.v-chip.v-chip--outlined {
  border: medium;
  border-width: 2px !important;
  border-style: solid;
}
.v-chip {
  min-width: 100% !important;
  text-align: center !important;
}
.btnBackground{
  background-color: #E1E1F9;
}
</style>
