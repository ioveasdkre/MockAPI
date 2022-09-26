import axios from "axios";
import { ref } from "vue";

export function useIndex() {
  const data = ref([]);
  const data2 = ref([]);
  const errorMessage = ref("");

  const initialization = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/Home/Index");
      const res2 = await axios.get("http://localhost:3000/api/Home/json");

      data.value = res.data;
      data2.value = res2.data;
    } catch (e) {
      errorMessage.value = "API 發生錯誤";
    }
  };

  return { data, data2, errorMessage, initialization };
}
