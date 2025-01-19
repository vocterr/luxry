import { Cart } from "@/types";
import { fetchCartOnClient } from "@/utils/fetchCartOnClient";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItemProductPage } from "../CartItem/CartItemProductPage";
import { useRouter } from "next/navigation";
import { RedirectToSignIn } from "@/components/RedirectToSignIn";

export const CartProductPage = ({
  setIsCartOpened,
}: {
  setIsCartOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const fetchedCart = await fetchCartOnClient();
        if (!fetchedCart) {
          setIsRedirecting(true);
          setTimeout(() => {
            router.push("/signin");
          }, 1500); 
          return;
        }
        setCart(fetchedCart);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setIsRedirecting(true);
        setTimeout(() => {
            router.push("/signin");
        }, 1500);
        
      }
    };

    fetchCart();
  }, [router]);

  useEffect(() => {
    if (!cart) return;
    setTotal(
      cart.cartItems.reduce((acc, item) => acc + item.product.price, 0)
    );
  }, [cart]);

  if (isRedirecting) {
    return <RedirectToSignIn />;
  }

  if (!cart) return null;

  return (
    <div
      className="relative z-[9999]"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={() => setIsCartOpened(false)}
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.cartItems.map((cartItem) => (
                          <CartItemProductPage
                            setTotal={setTotal}
                            cartItem={cartItem}
                            key={cartItem.id}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex font-inter justify-between text-base font-medium text-gray-900">
                    <p className="font-semibold text-gray-800">Subtotal</p>
                    <p className="font-semibold">${total?.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        onClick={() => setIsCartOpened(false)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
