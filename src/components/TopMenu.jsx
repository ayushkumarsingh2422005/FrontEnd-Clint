import noddle from "../assets/noddle.jpg"
import iceCream from "../assets/icecream.jpg"
import briyani from "../assets/briyani.jpg"
import dessert from "../assets/dessert.jpg"
export default function TopMenu(){
    const menus = [{'name':'Biryani','img':briyani},{'name':'Noobles','img':noddle},{'name':'Desserts','img':dessert},{'name':'Ice cream','img':iceCream}];
    return(
        <section className="h-full w-full px-6 md:px-12 lg:px-24 pt-2">
            <div className="flex justify-center gap-x-3">
                {menus.map((item,index)=>{
                    return (
                        <div>
                        <img className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full outline p-1 outline-secondary shadow-lg" key={index} src={item.img} alt={`Menu ${index}`} />
                        <p className="text-center">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
