# Air Tree n Tree Reservation Service


## API spec

## Get Room Pictures
-------- 

`GET /api/gallery/pictures/:roomId`

### Parameters 

| Field | Type |
|--------| ----------- |
|:roomId | Number

### Response

`Room[]`

## Room:
| Field | Type |
|--------| ----------- |
| roomId | Number |
| pictures | Picture[] |



```
{
  roomId: 50
  pictures: [
    {
      imageUrl: "imageurl1.com",
      description: "image description",
      verified: true
    },
    {
      imageUrl: "imageurl2.com",
      description: "image description",
      verified: false
    }
  ]
}
```
## Picture:
| Field | Type |
|--------| ----------- |
| imageUrl | String |
| description | String |
| verified | boolean |

