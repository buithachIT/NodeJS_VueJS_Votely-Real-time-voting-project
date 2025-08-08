<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold text-center mb-8 font-roboto">Font Demo</h1>

    <!-- Default Font (Nunito) -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold font-roboto">Default Font: Nunito</h2>
      <p class="text-lg">
        Đây là text mặc định sử dụng Nunito font. Tất cả text không có class
        font cụ thể sẽ sử dụng Nunito.
      </p>
      <p class="text-lg">
        Nunito có thiết kế thân thiện và hiện đại, phù hợp cho body text và nội
        dung chính.
      </p>
    </section>

    <!-- Roboto Font Demo -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold font-roboto">
        Roboto Font Family (Headings)
      </h2>

      <div class="space-y-2">
        <p class="font-roboto font-thin text-lg">Roboto Thin (100)</p>
        <p class="font-roboto font-light text-lg">Roboto Light (300)</p>
        <p class="font-roboto font-normal text-lg">Roboto Regular (400)</p>
        <p class="font-roboto font-medium text-lg">Roboto Medium (500)</p>
        <p class="font-roboto font-bold text-lg">Roboto Bold (700)</p>
        <p class="font-roboto font-normal italic text-lg">Roboto Italic</p>
      </div>
    </section>

    <!-- Nunito Font Demo -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold font-roboto">
        Nunito Font Family (Body Text)
      </h2>

      <div class="space-y-2">
        <p class="font-nunito font-extralight text-lg">
          Nunito ExtraLight (200)
        </p>
        <p class="font-nunito font-light text-lg">Nunito Light (300)</p>
        <p class="font-nunito font-normal text-lg">Nunito Regular (400)</p>
        <p class="font-nunito font-bold text-lg">Nunito Bold (700)</p>
        <p class="font-nunito font-normal italic text-lg">Nunito Italic</p>
        <p class="font-nunito font-bold italic text-lg">Nunito Bold Italic</p>
      </div>
    </section>

    <!-- Usage Examples -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold font-roboto">Usage Examples</h2>

      <div class="space-y-4">
        <div class="p-4 bg-gray-100 rounded">
          <h3 class="font-roboto font-bold text-xl mb-2">Heading với Roboto</h3>
          <p>
            Đây là body text sử dụng Nunito mặc định. Roboto được sử dụng cho
            headings và labels để tạo sự phân biệt rõ ràng.
          </p>
        </div>

        <div class="p-4 bg-blue-100 rounded">
          <h3 class="font-roboto font-bold text-xl mb-2">
            Form Labels với Roboto
          </h3>
          <p>
            Labels trong form sử dụng Roboto để dễ đọc, trong khi input text và
            placeholder sử dụng Nunito mặc định.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  // import { onMounted } from "vue";
  // import axios from "@/utils/axios.customize";

  // const fetchHello = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8083/v1/api/buithach");
  //     console.log("Check data", response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // onMounted(() => {
  //   fetchHello();
  // });
</script>
