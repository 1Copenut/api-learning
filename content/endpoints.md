# API endpoints for future use

The Energy Institute of America (EIA) API has a lot of endpoints, some of which have unique URLs or don't fit into one unified hierarchy. This table will map the endpoints I'm going to use for a (future) React app and data visualization.

## Getting started

API commands documentation: https://www.eia.gov/opendata/commands.php

### Getting started, tl;dr

1. The base URL for all API calls is `https://api.eia.gov/`
1. Use the [EIA query browser](https://www.eia.gov/opendata/qb.php?category=371) to find more data
1. You have registered for an [API key](https://www.eia.gov/opendata/register.cfm) with the EIA
1. If you do not specify an `?out=xml` query parameter, data will be returned as JSON
1. Read the [OWASP API Security Project](https://owasp.org/www-project-api-security/). Know it, live it, love it.

## Petroleum Imports and Exports

| Data set                                                    | Category                      | Data type | Endpoint URL                                                                 |
| ----------------------------------------------------------- | ----------------------------- | --------- | ---------------------------------------------------------------------------- |
| U.S. Commercial Crude Oil Imports Excluding SPR, 4 Week Avg | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WCEIMUS2.4                   |
| U.S. Commercial Crude Oil Imports Excluding SPR, Weekly     | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WCEIMUS2.W                   |
| U.S. Exports of Crude Oil, 4 Week Avg                       | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WCREXUS2.4                   |
| U.S. Exports of Crude Oil, Weekly                           | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WCREXUS2.W                   |
| U.S. Imports of Finished Motor Gasoline, 4 Week Avg         | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPM0F_IM0_NUS-Z00_MBBLD.4  |
| U.S. Imports of Finished Motor Gasoline, Weekly             | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPM0F_IM0_NUS-Z00_MBBLD.W  |
| U.S. Exports of Finished Motor Gasoline, 4 Week Avg         | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPM0F_EEX_NUS-Z00_MBBLD.4  |
| U.S. Exports of Finished Motor Gasoline, Weekly             | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPM0F_EEX_NUS-Z00_MBBLD.W  |
| U.S. Imports of Kerosene-Type Jet Fuel, 4 Week Avg          | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WKJIMUS2.4                   |
| U.S. Imports of Kerosene-Type Jet Fuel, Weekly              | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WKJIMUS2.W                   |
| U.S. Exports of Kerosene-Type Jet Fuel, 4 Week Avg          | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WKJEXUS2.4                   |
| U.S. Exports of Kerosene-Type Jet Fuel, Weekly              | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WKJEXUS2.W                   |
| U.S. Imports of Propane and Propylene, 4 Week Avg           | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WPRIM_NUS-Z00_2.4            |
| U.S. Imports of Propane and Propylene, Weekly               | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WPRIM_NUS-Z00_2.W            |
| U.S. Exports of Propane and Propylene, 4 Week Avg           | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPLLPZ_EEX_NUS-Z00_MBBLD.4 |
| U.S. Exports of Propane and Propylene, Weekly               | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.W_EPLLPZ_EEX_NUS-Z00_MBBLD.W |
| U.S. Imports of Residual Fuel Oil, 4 Week Avg               | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WREIMUS2.4                   |
| U.S. Imports of Residual Fuel Oil, Weekly                   | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WREIMUS2.W                   |
| U.S. Exports of Residual Fuel Oil, 4 Week Avg               | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WREEXUS2.4                   |
| U.S. Exports of Residual Fuel Oil, Weekly                   | Imports/Exports and Movements | Series    | series/?api_key=YOUR_API_KEY_HERE&series_id=PET.WREEXUS2.W                   |

## Natural Gas Residential Prices

| Data set                                                                       | Category          | Data type | Endpoint URL                                                                    |
| ------------------------------------------------------------------------------ | ----------------- | --------- | ------------------------------------------------------------------------------- |
| Alabama Price of Natural Gas Delivered to Residential Consumers, Monthly       | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010AL3.M                      |
| Alaska Price of Natural Gas Delivered to Residential Consumers, Monthly        | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010AK3.M                      |
| Arizona Price of Natural Gas Delivered to Residential Consumers, Monthly       | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010AZ3.M                      |
| _STATE_ Price of Natural Gas Delivered to Residential Consumers, Monthly       | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010 [STATE_2_LETTER_ABBR] 3.M |
| West Virginia Price of Natural Gas Delivered to Residential Consumers, Monthly | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010WV3.M                      |
| Wisconsin Price of Natural Gas Delivered to Residential Consumers, Monthly     | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010WI3.M                      |
| Wyoming Price of Natural Gas Delivered to Residential Consumers, Monthly       | Residential Price | Series    | /series/?api_key=YOUR_API_KEY_HERE&series_id=NG.N3010WY3.M                      |
