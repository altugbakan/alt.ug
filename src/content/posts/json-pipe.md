---
title: Debugging with JsonPipe
description: Using the JsonPipe in Angular for easier debugging.
date: 2024-02-13
tags: [angular, programming]
---

Whenever a backend API changes, the frontend must adapt to display information, whenever there are data changes. If the changes are not well-communicated, this can cause frustration, as trying to debug the incoming data without an API documentation is realy annoying. Luckily, Angular has the JSON pipe for easier debugging.

Let's say that we have an [Angular Component](https://angular.io/guide/component-overview) like below

```typescript
import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  template: `<h1>User Information</h1>
    <ul>
      <li>Full Name: {{ user.fullName }}</li>
      <li>Age: {{ user.age }}</li>
    </ul>`,
})
export class AppComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

Which displays

<div class="flex flex-col items-center">

### User Data

- Full Name: John Doe
- Age: 21

</div>

If the members of the data changes, the frontend might be broken, failing to show information. Let's say the team has updated the backend, and the frontend for user display now looks like this:

<div class="flex flex-col items-center">

### User Data

- Full Name:
- Age: 21

</div>

What happened? Usually, a network tab inspection shows us the problem, but imagine we don't have anything unusual there in our case. Let's try to print the object itself for easier debugging.

```typescript
import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  template: `<h1>User Information</h1>
    {{ user }}`,
})
export class AppComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

<div class="flex flex-col items-center">

### User Data

[object Object]

</div>

Not quite useful. Luckily, there's `JsonPipe`, which can be used to debug data by displaying it in [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) format. The usage is quite simple:

```typescript
import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  template: `<h1>User Information</h1>
    {{ user | json }}`,
})
export class AppComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

<div class="flex flex-col items-center">

### User Data

{ "name": "John Doe", "age": 21 }

</div>

So that was the change! The `fullName` element was changed to `name`! This information can be quite packed when receiving a huge object though. Luckily, we can print this information inside `<pre>` tags to get the JSON pretty-printed.

```typescript
import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  template: `<h1>User Information</h1>
    <pre>{{ user | json }}</pre>`,
})
export class AppComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

<div class="flex flex-col items-center">

### User Data

<pre>
{
  "name": "John Doe",
  "age": 21
}
</pre>

</div>

Neat! Now you know how we can easily debug elements that are displayed in the frontend! For more information about this pipe, check out [JsonPipe](https://angular.io/api/common/JsonPipe) on the Angular Documentation.
