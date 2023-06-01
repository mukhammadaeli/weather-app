const KEY = 'ab68d5e98086a465ee9e4a4163cbcb7f'

// request get data
const getData = async (city) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&units=metric&appid=${KEY}`
  // console.log('Loading...');
  loader(true)
  const req = await fetch(base + query)
  const data = await req.json()
  console.log(data);
  // console.log('Finished !!');
  loader(false)
  return data
}