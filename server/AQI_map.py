import sys
import requests
import json

# Function to get the air quality index for a specific location using latitude and longitude
def get_air_quality(lat, lon):
    url = "https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyDAanUpMZudipzPw2yh09be-Thru9Qk4oE"  
    data = {
        "universalAqi": True,  # Get universal AQI format
        "location": {"latitude": lat, "longitude": lon},  # Location data
        "extraComputations": ["LOCAL_AQI"],  # Use local AQI for more details 
        "languageCode": "en"  # English for the language
    }


    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(data), headers=headers)
    if response.status_code == 200:
        return response.json()  # If successful, return the JSON data
    return None  # Return None if the request fails

if __name__ == "__main__":
    if len(sys.argv) != 3:  # Expecting latitude and longitude as inputs
        print("N/A")
        sys.exit(1)

    # Getting the latitude and longitude from command line arguments
    latitude = float(sys.argv[1])
    longitude = float(sys.argv[2])
    air_quality_data = get_air_quality(latitude, longitude)

    if air_quality_data:
        # Extracting the AQI from the data, or defaulting to "N/A" if it's not available
        aqi_indexes = air_quality_data.get("indexes", [])
        if aqi_indexes:
            aqi = aqi_indexes[0]["aqi"]
        print(aqi)
    else:
        print("N/A")  # If it can't get the data, just print "N/A"