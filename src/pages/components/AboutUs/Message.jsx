import React from "react";
import profileImg from "../../../assets/profileimg.jpg";

const Message = () => {
  return (
    <div>
      {/* div1 */}
      <div>
        <section>
          <div className="flex flex-col mt-4  items-center  p-2">
            <div className="flex flex-col w-full   text-left ">
              <div className="w-full ">
                <h3 className="text-3xl text-red-500 mb-2  px-2 border-l-4 border-red-500  ">
                  Introduction
                </h3>

                <p className="text-gray-700 py-2 text-center break-all text-base font-sans  border-l-4 border-red-500 px-2 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                  molestias sit sint quo in consequuntur voluptatum iure ipsa,
                  rerum provident, voluptate obcaecati assumenda sed tempora
                  dolor illum, ducimus eaque quae impedit. Dicta saepe enim
                  sequi beatae expedita! Quaerat impedit eius officia nulla
                  laborum iusto deserunt, nam aperiam, vitae, quam quidem porro!
                  Delectus, sunt optio laudantium eum nam harum debitis officia
                  magnam ad illum veritatis repudiandae quas! Natus minus
                  ratione rerum, deleniti, accusamus assumenda tempore incidunt
                  quidem quia ab sapiente molestias itaque provident dolor iusto
                  numquam doloribus, ipsum deserunt iure voluptates eius porro
                  maiores quibusdam ex. Temporibus ipsam non eum esse nesciunt
                  alias ipsum assumenda! Dolores, beatae? Aspernatur illum
                  cumque rem excepturi quod cum at voluptatibus tenetur sed.
                  Labore blanditiis voluptates velit eius perspiciatis esse,
                  natus corporis modi, aspernatur ullam amet iste obcaecati nemo
                  tempora aliquam! Porro doloremque velit nisi! Hic unde dolore
                  voluptatum ea doloremque magnam ducimus. Voluptate consequatur
                  laborum nam expedita tempore alias cum ipsam quidem. Illo
                  perspiciatis architecto labore, odit veritatis consequuntur ex
                  officiis incidunt a error explicabo enim magni ab dolorum sed
                  dignissimos! Omnis sint distinctio aliquid optio itaque iusto
                  quos in! Consequatur dolor commodi magni, voluptate est
                  dolorem veniam, fugiat ducimus quidem dolore accusamus laborum
                  non! Quis ipsam autem nulla illo et laborum ratione suscipit
                  voluptatibus ea mollitia! Minus harum necessitatibus aut est
                  voluptates. Cum tempore ipsam ratione asperiores laudantium?
                  Tenetur expedita similique reiciendis, veniam facilis iste
                  esse exercitationem perferendis quis eveniet numquam ratione
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font p-2 ">
          <h3 className="text-3xl text-red-500 mb-2  px-2 border-l-4 border-red-500  ">
            Message
          </h3>
          <div className="container px-5 mx-auto mt-10 border-l-4 border-red-500">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/302x302"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Principle</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/300x300"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">Vice Principal</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/305x305"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">Secretary</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* div 3 */}
      <div>
        <section className="text-gray-600 body-font mt-5 py-10 px-2">
          <h3 className="text-3xl text-red-500  px-2 border-l-4 border-red-500  ">
            Statistics
          </h3>
          <div className="container px-5 mx-auto flex flex-wrap ">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10  border-l-4 border-red-500 ">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                  Moon hashtag pop-up try-hard offal truffaut
                </h1>
                <div className="leading-relaxed">
                  Pour-over craft beer pug drinking vinegar live-edge gastropub,
                  keytar neutra sustainable fingerstache kickstarter.
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Students</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Techers</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Member</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src="https://scontent-sin6-4.xx.fbcdn.net/v/t1.18169-9/1472961_545525372272758_2529099398560975923_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeFydZaU2vEHm_-Hr2uVIAc8JtmSCOZzjMom2ZII5nOMykOXOWdST14MrdHjIiPUq09liG9eUsyHU7hkOOm-2kyy&_nc_ohc=_EsfG_51Bm0AX8G2J6G&_nc_ht=scontent-sin6-4.xx&oh=00_AfCfp_i-kqgEHhwingZEY_GNAyTtlf0Wuj8V8WlchYbW7g&oe=659E5E5A"
                alt="stats"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Message;
