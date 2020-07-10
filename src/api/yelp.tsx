import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XonuuuqqMzxFn-x9uRoLhqiWDTlP_ytHaGTzCoRngLcIYDKic8fM1D-6pEbPsP5uYojwpwjbx8oS0I7pG8dK52pcX6bAtrwsSLFvamC_jNqgt8SbV60SL2rFQ5QHX3Yx",
  },
});
