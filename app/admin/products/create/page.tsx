import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";
import React from "react";
const createProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
};
const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const descri0ption = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <FormInput
            name="name"
            type="text"
            label="product name"
            defaultValue={name}
          />
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;
