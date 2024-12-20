


export function BookingForm() {

  return (
    <>
 


<div className="bg-gray-100 p-8">
    <div className="bg-white shadow-md mx-auto p-6 rounded-lg max-w-4xl">
        <h1 className="mb-6 font-bold text-2xl text-center">Vanee Truckwash - Custom Wash Workorder</h1>

       
        <div className="gap-4 grid grid-cols-2 mb-4">
            <div>
                <label className="block font-medium">Date of Wash:</label>
                <input type="date" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Time of Wash:</label>
                <input type="time" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">P.O.#:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Date Needed:</label>
                <input type="date" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Time Needed:</label>
                <input type="time" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>

       
        <div className="mb-4">
            <label className="block font-medium">Company:</label>
            <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
        </div>
        <div className="gap-4 grid grid-cols-2 mb-4">
            <div>
                <label className="block font-medium">Driver Name:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Signature:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>
        <div className="gap-4 grid grid-cols-2 mb-4">
            <div>
                <label className="block font-medium">Truck #:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Trailer #:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>

        
        <h2 className="mb-4 font-bold text-xl">Wash Information</h2>
        <div className="gap-4 grid grid-cols-2">
            
            <div>
                <h3 className="mb-2 font-medium">Hog Washes</h3>
                <label className="block"><input type="checkbox" className="mr-2"/>Hog Wash (Fire Hose)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Hog Wash (High Pressure)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>High Pressure (Back End Only)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Wash Decking (High Pressure)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Wash Decking (Fire Hose)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Wash Decking (Take Out)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Wash Sheeting</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Install Sheeting (Full)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Install Sheeting (Half)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Rinse Outside (High Pressure)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Rinse Outside (Fire Hose)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Disinfect</label>
            </div>

          
            <div>
                <h3 className="mb-2 font-medium">Cattle Washes</h3>
                <label className="block"><input type="checkbox" className="mr-2"/>Quick Wash Out (Fire Hose)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Fairly Clean Wash (Floors)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Fairly Clean Wash (Walls)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Fairly Clean Wash (Behind Gates)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>High Pressure (Inside Stains)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>High Pressure (Outside Stains)</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Rinse Outside (Fire Hose)</label>
            </div>

            
            <div>
                <h3 className="mb-2 font-medium">Super B's/Grain Trailers</h3>
                <label className="block"><input type="checkbox" className="mr-2"/>Fire Hose Hoppers</label>
                <label className="block"><input type="checkbox" className="mr-2"/>High Pressure Wash Hoppers</label>
                <label className="block"><input type="checkbox" className="mr-2"/>High Pressure Wash Outside</label>
            </div>

       
            <div>
                <h3 className="mb-2 font-medium">Other</h3>
                <label className="block"><input type="checkbox" className="mr-2"/>Tractor Wash</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Bus</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Flat Deck</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Gravel Trailer</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Citric Acid</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Cement Hoppers</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Curtain Trailer</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Stock Trailer</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Tankers</label>
                <label className="block"><input type="checkbox" className="mr-2"/>Hard Acid Wash</label>
            </div>
        </div>

       
        <h2 className="mt-6 mb-4 font-bold text-xl">Labour Information</h2>
        <div className="mb-4">
            <label className="block font-medium">Bay #:</label>
            <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
        </div>
        <div className="gap-4 grid grid-cols-3 mb-4">
            <div>
                <label className="block font-medium">Labour Done By (1):</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Labour Done By (2):</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Labour Done By (3):</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>
        <div className="gap-4 grid grid-cols-3 mb-4">
            <div>
                <label className="block font-medium">Start Time:</label>
                <input type="time" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">End Time:</label>
                <input type="time" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Ice Melt Minutes:</label>
                <input type="number" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>

       
        <div className="gap-4 grid grid-cols-2">
            <div>
                <label className="block font-medium">Wash:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Labour:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Total:</label>
                <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
            </div>
        </div>

  
        <div className="mt-6">
            <label className="block font-medium">Authorized By:</label>
            <input type="text" className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"/>
        </div>
    </div>
</div>


    </>
  );
}