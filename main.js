const apiKey = '0c118d4a30764f7fb8a155045232004'

//элементы на странице
const header = document.querySelector('.header')
const form = document.querySelector('.form');
const input = document.querySelector('.input')

form.onsubmit = function(e){
    // отменяем отправку формы
    e.preventDefault();

    //берем значение из инпута и убираем пробелы
    let city = input.value.trim();
    
    //адрес запроса
     const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

     //выполянем запрос 
     fetch(url).then((response) =>{
             return response.json()
         })
         .then((data) => {
                                //достать данные по кусочку
             console.log(data);
             console.log(data.location.name);
             console.log(data.current.temp_c);
             console.log(data.current.condition.text);
                                //отображаем полученные данные в карточке
                                // удаляем старую карточку 
            const prevCard = document.querySelector('.card');
            if(prevCard){
                prevCard.remove()
            };

                                //разметка для карточки 
            const html = `<div class="card">
            <h2 class="card-city">${data.location.name}</h2>
            <div class="card-wheater">
                <div class="card-value">${data.current.temp_c}<sup>°C</sup> </div>
                <img src="image/4 1.png" alt="" class="card-img">
            </div>
    
           <div class="card-desc">${data.current.condition.text}</div>
    
        </div>`
        //отображаем карточку на странице
        header.insertAdjacentHTML('afterend',html)
        })
}