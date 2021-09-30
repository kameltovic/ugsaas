

function showCourse(i){

var course =`
                <div class="p-3">
                <div class=" rounded-lg bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-2xl">
                    <img src="https://source.unsplash.com/random?i=${i}" class="courseImg" />
                     <div class="">
                        <div class="px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Christmas Gaming
                            </h3>
                            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                                Personal details and application.
                            </p>
                        </div>
                        <div class="border-t border-gray-200 px-4 py-4 text-sm text-gray-500">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. At porro, aliquam perferendis placeat, rerum voluptate magni minus itaque iste reprehenderit beatae eius distinctio cumque sit debitis! Distinctio maxime qui officia.
                        </div>
                        <div class="rounded-md shadow p-4 py-5">
                            <a href="single.html"
                                class="w-full flex items-center justify-center px-3 py-3 border border-transparent text-base font-bold  rounded-md text-gray-900 bg-gray-100 hover:bg-gray-100 ">
                               Get a quote
                            </a>
                        </div>
                        </div>
                    </div>

                </div>`;

return course;

}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


for(var i = 0; i < 10; i++){

    var course = document.createElement('div');
    course.classList.add('px-4', 'py-6', 'sm:px-0', 'lg:w-1/3', 'md:w-1/3', 'sm:w-full', 'box-border');

    course.innerHTML = showCourse(i);

    sleep(100000);

        document.getElementById('myCourses').appendChild(course);

}

//document.getElementById('myCourses').innerHTML = course;

