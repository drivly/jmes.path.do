# jmes.path.do

Dynamic JMESPath Transformations

<https://json.fyi/locations.json>
```json
{
  "locations": [
    {"name": "Seattle", "state": "WA"},
    {"name": "New York", "state": "NY"},
    {"name": "Bellevue", "state": "WA"},
    {"name": "Olympia", "state": "WA"}
  ]
}
```

The authors of all books in the store: `locations[?state == 'WA'].name | sort(@) | {WashingtonCities: join(', ', @)}`

[https://jmes.path.do/locations[?state=='WA'].name|sort(@)|{WashingtonCities:join(', ',@)}/json.fyi/locations.json](https://jmes.path.do/locations[?state=='WA'].name|sort(@)|{WashingtonCities:join(`,%20`,@)}/json.fyi/locations.json)

```json
{
  "WashingtonCities": "Bellevue, Olympia, Seattle"
}
```


<https://json.fyi/people.json>
```json
{
  "people": [
    {
      "age": 20,
      "other": "foo",
      "tags": ["a", "b", "c"],
      "name": "Bob"
    },
    {
      "age": 25,
      "other": "bar",
      "tags": ["d", "e", "f"],
      "name": "Fred"
    },
    {
      "age": 30,
      "other": "baz",
      "tags": ["g", "h", "i"],
      "name": "George"
    }
  ]
}

```

Get the name and age of people over the age of 20: `people[?age > '20'].[name, age]`

[https://jmes.path.do/people[?age>'20'].[name,age]/json.fyi/people.json](https://jmes.path.do/people[?age>`20`].[name,age]/json.fyi/people.json)

```json
[
  [
    "Fred",
    25
  ],
  [
    "George",
    30
  ]
]
```

Get the name and first tag of all people: `people[*].{name: name, tags: tags[0]}`

[https://jmes.path.do/people[*].{name:name,tags:tags[0]}/json.fyi/people.json](https://jmes.path.do/people[*].{name:name,tags:tags[0]}/json.fyi/people.json)

```json
[
  {
    "name": "Bob",
    "tags": "a"
  },
  {
    "name": "Fred",
    "tags": "d"
  },
  {
    "name": "George",
    "tags": "g"
  }
]
```
