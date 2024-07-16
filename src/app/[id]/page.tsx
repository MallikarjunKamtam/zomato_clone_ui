"use client";
import { addToCart, getCartList, removeFromToCart } from "@/api/cart";
import { getAllProductsForResturant } from "@/api/products";
import NavBarHome from "@/shared/navBar";
import Product from "@/shared/product";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function ({ params: { id } }: { params: { id: string } }) {
  const products = useQuery({
    queryKey: ["getAllProductsForResturant"],
    queryFn: () => {
      return getAllProductsForResturant(+id);
    },
  });

  const cartDetails = useQuery({
    enabled: !!id,
    queryKey: [`${id}-getCartList`],
    queryFn: () => {
      return getCartList(+id);
    },
  });

  const addToCartAsync = useMutation({
    mutationFn: (productId: number) => {
      return addToCart({ productId, restaurantId: +id });
    },
    onSuccess() {
      cartDetails.refetch();
    },
  });

  const removeFromToCartAsync = useMutation({
    mutationFn: (productId: number) => {
      return removeFromToCart({ productId, restaurantId: +id });
    },
    onSuccess() {
      cartDetails.refetch();
    },
  });

  const emptyPlaceHolder = () => {
    return <>Empty</>;
  };

  const content = () => {
    return (
      <section>
        <NavBarHome />
        <main className="grid grid-cols-3 items-center justify-center gap-10 p-4">
          {products?.data?.data.map((product, index) => (
            <Product
              isLoading={
                removeFromToCartAsync.isPending || addToCartAsync.isPending
              }
              onRemove={(id) => {
                removeFromToCartAsync.mutateAsync(id);
              }}
              onAdd={(id) => {
                addToCartAsync.mutateAsync(id);
              }}
              addedCount={cartDetails?.data?.data[product.id] ?? 0}
              key={product.id + index}
              data={product}
            />
          ))}
        </main>
      </section>
    );
  };

  return products?.data?.data?.length > 0 ? content() : emptyPlaceHolder();
}
