import React from "react";

export default function FooterLayout() {
  return (
    <div className="text-zinc-50">
      <div className="h-24 bg-zinc-700">
        <div className="mx-6 md:mx-12 lg:mx-16 h-full flex items-center">
          <h3 className="pb-2 text-zinc-50 text-xl md:text-2xl uppercase tracking-wide border-b-2 border-yellow-500">
            contact me
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 bg-zinc-600">
        <div className="h-full w-full lg:w-5/6 justify-self-center text-zinc-50">
          <div className="mx-6 md:mx-12 lg:mx-16 py-28 px-8">
            <form className="flex flex-col">
              <label className="mb-2 font-bold tracking-wider md:text-lg">
                Name
              </label>
              <input
                className="w-4/6 p-2 rounded-sm"
                placeholder="Your name"
                required
              />

              <label className="mb-2 mt-4 font-bold tracking-wider md:text-lg">
                Email
              </label>
              <input
                className="w-4/6 p-2 rounded-sm"
                placeholder="Your email"
                required
              />

              <label className="mb-2 mt-4 font-bold tracking-wider md:text-lg">
                Message
              </label>
              <textarea
                className="w-full h-40 p-2 rounded-sm"
                placeholder="Your message"
                required
              />

              <button className="py-2 px-8 w-fit mt-4 rounded-sm bg-yellow-500 text-zinc-600 font-bold uppercase tracking-wider">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="h-full w-full justify-self-center">
          <div className="flex flex-col items-center h-full w-full py-28 ">
            <div className="text-lg">
              <h4 className="w-fit mb-4 py-2 border-b-2 border-yellow-500 uppercase text-2xl font-bold tracking-wide">
                Contact Details
              </h4>

              <div className="flex items-center mt-6">
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p>Dublin, Ireland</p>
              </div>

              <div className="flex items-center mt-4">
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p>rhiannon@gmail.com</p>
              </div>

              <div className="flex items-center mt-4">
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p>086 1234567</p>
              </div>

              <div className="flex items-center mt-4">
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="hover:text-yellow-500 underline cursor-pointer">
                  My Resumé
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-12  w-full">
              <div className="mr-14 cursor-pointer hover:fill-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  className="fill-zinc-50 hover:fill-yellow-500"
                >
                  <path
                    d="M17.7272 42.6755C17.7272 42.8947 17.4815 43.0701 17.1716 43.0701C16.819 43.1029 16.5732 42.9276 16.5732 42.6755C16.5732 42.4563 16.819 42.281 17.1288 42.281C17.4494 42.2481 17.7272 42.4235 17.7272 42.6755ZM14.404 42.1824C14.3292 42.4015 14.5429 42.6536 14.8635 42.7194C15.1413 42.829 15.4619 42.7194 15.526 42.5002C15.5901 42.281 15.3871 42.0289 15.0665 41.9303C14.7887 41.8536 14.4788 41.9632 14.404 42.1824ZM19.127 41.996C18.8171 42.0728 18.6034 42.281 18.6355 42.5331C18.6675 42.7522 18.9454 42.8947 19.2659 42.818C19.5758 42.7413 19.7895 42.5331 19.7575 42.3139C19.7254 42.1056 19.4369 41.9632 19.127 41.996ZM26.1581 0C11.3373 0 0 11.5401 0 26.7407C0 38.8946 7.45847 49.2949 18.1119 52.9553C19.4796 53.2074 19.9605 52.3416 19.9605 51.6293C19.9605 50.9498 19.9284 47.2017 19.9284 44.9003C19.9284 44.9003 12.4486 46.5442 10.8778 41.6344C10.8778 41.6344 9.65968 38.4452 7.90726 37.6233C7.90726 37.6233 5.46028 35.9027 8.07823 35.9356C8.07823 35.9356 10.7389 36.1547 12.2028 38.7631C14.5429 42.9933 18.4645 41.7769 19.9925 41.0535C20.2383 39.3001 20.9329 38.0836 21.7022 37.3603C15.729 36.6808 9.70242 35.7931 9.70242 25.2502C9.70242 22.2364 10.5145 20.724 12.2242 18.7952C11.9464 18.0828 11.0381 15.1458 12.502 11.3538C14.7353 10.6415 19.875 14.3128 19.875 14.3128C22.0121 13.6991 24.3095 13.3813 26.5855 13.3813C28.8615 13.3813 31.1589 13.6991 33.296 14.3128C33.296 14.3128 38.4357 10.6305 40.669 11.3538C42.1329 15.1567 41.2246 18.0828 40.9468 18.7952C42.6565 20.735 43.7036 22.2474 43.7036 25.2502C43.7036 35.826 37.4099 36.6698 31.4367 37.3603C32.4198 38.226 33.2532 39.8699 33.2532 42.4454C33.2532 46.1387 33.2212 50.7087 33.2212 51.6074C33.2212 52.3197 33.7127 53.1855 35.0698 52.9334C45.7552 49.2949 53 38.8946 53 26.7407C53 11.5401 40.9788 0 26.1581 0ZM10.3863 37.7986C10.2474 37.9082 10.2794 38.1603 10.4611 38.3685C10.6321 38.5439 10.8778 38.6206 11.0167 38.4781C11.1556 38.3685 11.1236 38.1165 10.9419 37.9082C10.771 37.7329 10.5252 37.6562 10.3863 37.7986ZM9.23226 36.9109C9.15746 37.0534 9.26431 37.2287 9.47802 37.3383C9.64899 37.4479 9.8627 37.4151 9.9375 37.2616C10.0123 37.1192 9.90544 36.9438 9.69173 36.8342C9.47802 36.7685 9.30706 36.8013 9.23226 36.9109ZM12.6944 40.8124C12.5234 40.9549 12.5875 41.2837 12.8333 41.4919C13.079 41.744 13.3889 41.7769 13.5278 41.6015C13.6667 41.459 13.6026 41.1303 13.3889 40.922C13.1538 40.67 12.8333 40.6371 12.6944 40.8124ZM11.4762 39.2014C11.3052 39.311 11.3052 39.596 11.4762 39.848C11.6472 40.1001 11.9357 40.2097 12.0746 40.1001C12.2456 39.9576 12.2456 39.6727 12.0746 39.4206C11.925 39.1685 11.6472 39.059 11.4762 39.2014Z"
                  />
                </svg>
              </div>
              <div className="mr-14 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="50"
                  viewBox="0 0 51 50"
                  className="fill-zinc-50 hover:fill-yellow-500"
                >
                  <path
                    d="M0.294922 7C0.294922 3.13401 3.42893 0 7.29492 0H43.2949C47.1609 0 50.2949 3.13401 50.2949 7V43C50.2949 46.866 47.1609 50 43.2949 50H7.29492C3.42893 50 0.294922 46.866 0.294922 43V7Z"
        
                  />
                  <path
                    d="M18.2949 13.5C18.2949 15.9853 16.2802 18 13.7949 18C11.3096 18 9.29492 15.9853 9.29492 13.5C9.29492 11.0147 11.3096 9 13.7949 9C16.2802 9 18.2949 11.0147 18.2949 13.5Z"
                    fill="#52525b"
                  />
                  <path
                    d="M10.2949 21C10.2949 20.4477 10.7426 20 11.2949 20H16.2949C16.8472 20 17.2949 20.4477 17.2949 21V40C17.2949 40.5523 16.8472 41 16.2949 41H11.2949C10.7426 41 10.2949 40.5523 10.2949 40V21Z"
                    fill="#52525b"
                  />
                  <path
                    d="M21.2949 20L25.7949 20C26.3472 20 26.7949 20.4477 26.7949 21V22C28.7949 19.5 32.4616 19.3333 34.2949 19.5C40.0103 20.0195 40.9616 25.8333 40.7949 29L40.7949 40C40.7949 40.5523 40.3472 41 39.7949 41L35.2949 41C34.7426 41 34.2949 40.5523 34.2949 40V29C34.1283 27.6667 33.1949 25 30.7949 25C28.3949 25 26.9616 28 26.7949 29V40C26.7949 40.5523 26.3472 41 25.7949 41L21.2949 41C20.7426 41 20.2949 40.5523 20.2949 40V21C20.2949 20.4477 20.7426 20 21.2949 20Z"
                    fill="#52525b"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="53"
                  viewBox="0 0 54 53"
                  className="fill-zinc-50 hover:fill-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.8604 0.158295C18.6738 0.0287808 19.5708 0 26.7372 0C33.9037 0 34.8007 0.0311793 37.6116 0.158295C40.4225 0.285411 42.3413 0.733913 44.0201 1.38388C45.7782 2.04824 47.3731 3.08675 48.6922 4.42986C50.0354 5.74659 51.0715 7.33913 51.7334 9.09956C52.3858 10.7784 52.8319 12.6972 52.9614 15.5033C53.0909 18.3214 53.1197 19.2184 53.1197 26.3825C53.1197 33.5489 53.0885 34.4459 52.9614 37.2593C52.8343 40.0654 52.3858 41.9841 51.7334 43.663C51.0715 45.4237 50.0336 47.0189 48.6922 48.3375C47.3731 49.6806 45.7782 50.7167 44.0201 51.3787C42.3413 52.0311 40.4225 52.4772 37.6164 52.6067C34.8007 52.7362 33.9037 52.765 26.7372 52.765C19.5708 52.765 18.6738 52.7338 15.8604 52.6067C13.0543 52.4796 11.1356 52.0311 9.45669 51.3787C7.69607 50.7166 6.10089 49.6788 4.7822 48.3375C3.44 47.02 2.40133 45.4256 1.73862 43.6654C1.08865 41.9865 0.642545 40.0678 0.513031 37.2617C0.383517 34.4435 0.354736 33.5465 0.354736 26.3825C0.354736 19.216 0.385916 18.319 0.513031 15.5081C0.640147 12.6972 1.08865 10.7784 1.73862 9.09956C2.40231 7.33932 3.44177 5.74494 4.7846 4.42746C6.10142 3.08555 7.695 2.04691 9.4543 1.38388C11.1332 0.733913 13.0519 0.287809 15.858 0.158295H15.8604ZM37.3981 4.90714C34.616 4.78003 33.7813 4.75364 26.7372 4.75364C19.6931 4.75364 18.8585 4.78003 16.0763 4.90714C13.5028 5.02466 12.1069 5.45398 11.1764 5.81614C9.94597 6.29582 9.06575 6.86424 8.14237 7.78763C7.26706 8.63919 6.59343 9.67585 6.17088 10.8216C5.80872 11.7522 5.3794 13.1481 5.26188 15.7216C5.13476 18.5037 5.10838 19.3384 5.10838 26.3825C5.10838 33.4266 5.13476 34.2613 5.26188 37.0434C5.3794 39.6169 5.80872 41.0128 6.17088 41.9434C6.593 43.0874 7.26695 44.1259 8.14237 44.9773C8.9938 45.8528 10.0323 46.5267 11.1764 46.9488C12.1069 47.311 13.5028 47.7403 16.0763 47.8578C18.8585 47.985 19.6907 48.0113 26.7372 48.0113C33.7837 48.0113 34.616 47.985 37.3981 47.8578C39.9716 47.7403 41.3675 47.311 42.2981 46.9488C43.5285 46.4692 44.4087 45.9007 45.3321 44.9773C46.2075 44.1259 46.8815 43.0874 47.3036 41.9434C47.6657 41.0128 48.0951 39.6169 48.2126 37.0434C48.3397 34.2613 48.3661 33.4266 48.3661 26.3825C48.3661 19.3384 48.3397 18.5037 48.2126 15.7216C48.0951 13.1481 47.6657 11.7522 47.3036 10.8216C46.8239 9.59123 46.2555 8.71102 45.3321 7.78763C44.4805 6.91238 43.4438 6.23876 42.2981 5.81614C41.3675 5.45398 39.9716 5.02466 37.3981 4.90714ZM23.3675 34.5155C25.2494 35.2989 27.3449 35.4046 29.2962 34.8146C31.2474 34.2246 32.9333 32.9755 34.0658 31.2806C35.1984 29.5857 35.7074 27.5502 35.5059 25.5217C35.3044 23.4932 34.4049 21.5976 32.9611 20.1586C32.0407 19.2388 30.9278 18.5344 29.7025 18.0963C28.4772 17.6582 27.17 17.4973 25.875 17.625C24.58 17.7527 23.3295 18.166 22.2134 18.835C21.0973 19.5041 20.1434 20.4122 19.4204 21.4942C18.6974 22.5761 18.2233 23.8049 18.0322 25.0921C17.8412 26.3792 17.9378 27.6927 18.3153 28.938C18.6928 30.1833 19.3417 31.3295 20.2153 32.2939C21.0889 33.2583 22.1654 34.0171 23.3675 34.5155ZM17.1484 16.7937C18.4076 15.5344 19.9025 14.5356 21.5478 13.8541C23.193 13.1726 24.9564 12.8218 26.7372 12.8218C28.518 12.8218 30.2814 13.1726 31.9267 13.8541C33.5719 14.5356 35.0668 15.5344 36.3261 16.7937C37.5853 18.0529 38.5842 19.5478 39.2656 21.193C39.9471 22.8383 40.2979 24.6017 40.2979 26.3825C40.2979 28.1633 39.9471 29.9267 39.2656 31.5719C38.5842 33.2172 37.5853 34.7121 36.3261 35.9713C33.7829 38.5144 30.3337 39.9431 26.7372 39.9431C23.1407 39.9431 19.6915 38.5144 17.1484 35.9713C14.6053 33.4282 13.1766 29.979 13.1766 26.3825C13.1766 22.786 14.6053 19.3368 17.1484 16.7937ZM43.3054 14.8413C43.6175 14.547 43.8673 14.193 44.0401 13.8004C44.2129 13.4077 44.3051 12.9844 44.3114 12.5555C44.3176 12.1266 44.2377 11.7007 44.0765 11.3032C43.9152 10.9057 43.6758 10.5446 43.3725 10.2413C43.0692 9.93797 42.7081 9.69858 42.3105 9.53731C41.913 9.37604 41.4872 9.29617 41.0583 9.30242C40.6294 9.30868 40.206 9.40093 39.8134 9.57372C39.4208 9.7465 39.0668 9.99631 38.7724 10.3084C38.2 10.9152 37.8865 11.7213 37.8987 12.5555C37.9109 13.3897 38.2476 14.1863 38.8376 14.7762C39.4275 15.3661 40.2241 15.7029 41.0583 15.7151C41.8925 15.7272 42.6986 15.4138 43.3054 14.8413Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 h-16 flex justify-center items-center">
        <p className="text-zinc-600 text-sm">Copyright © 2022 Rhiannon Thompson</p>
      </div>
    </div>
  );
}
