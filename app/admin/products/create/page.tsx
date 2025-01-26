import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/textAreaInput";
import { Button } from "@/components/ui/button";
import { createProductAction } from "@/utils/action";

import { faker } from "@faker-js/faker";
import React from "react";

//temp for test
// const createProductAction = async (formData: FormData) => {
//   "use server";
//   const name = formData.get("name") as string;
//   console.log(name);
// };
const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </div>
  );
};

export default CreateProductPage;
