# DISCORD Weather BOT ( Using Discord.js API and OpenWeatherMap API)

## COMMANDS :
```
!weather <city_name>
```
Returns the weather Information of the city at a given Time
Response Object Includes the following in Metric Units :

| Name | Values |
| --- | --- |
| `name` | The City Name |
| `weather` | Sunny | Rainy | Cloudy | Mist |
| `Temperature` | Min and Max Temperature of the day |
| `Atmosphere` | Atm. Pressure and Humidity |
| `Wind Speed` | Information about the Wind |
| `Cloud Cover` | In Percentage, value of cloud cover in the city. |

#### (Currently Only Indian Cities Supported)

```
!weather <help>
```