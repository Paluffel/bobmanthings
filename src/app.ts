/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "BOBWORKS"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1554519477981282397",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.0003, y: -0.0503 , z: -0.047365 },
                        scale: { x: 1.005, y: 1.005, z: 1.005},
                       
                    }}
                }
            });

	// Create cube.
    console.log(`User joined: ${user.name}`);
    console.log(user);
    if (user.name === "BOBWORKS"){
        const mirror =   Actor.CreateFromLibrary(this.context, {
    resourceId: "artifact: 1314062242190197175",
    actor: {
        name: 'Mirror',
        grabbable: true,
        exclusiveToUser: user.id,
        attachment: {
            userId: user.id,
            attachPoint: 'spine-middle'
        },
        transform: {local: {
            position: { x: 0, y: 0, z:0.5  },
            scale: { x: 0.2, y: 0.2, z: 0.2}
        }}
    }
});
    //te button behavior for cube.
mirror.setBehavior(ButtonBehavior).onButton("pressed", (user: User) => {
    if (!this.attachedItems[user.id]) {
// If item for user does not exist, create it and add to list.
this.attachedItems[user.id] = Actor.CreateFromLibrary(this.context, {
    resourceId: "artifact: 1500238185001648719",
    actor: {
        name: 'Retro',
        attachment: {
            userId: user.id,
            attachPoint: 'head'
        },
        transform: {local: {
            position: { x: 0.0003, y: -0.0503 , z: -0.047365 },
            scale: { x: 1.007, y: 1.007, z: 1.007},
        }}
    }
});

   } else {
    // If item already exists, destroy it and delete from list.
    this.attachedItems[user.id].destroy();
    delete this.attachedItems[user.id];
}
});
	            // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "BOBWORKS"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1500238211476095574",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'spine-top'
                    },
                    transform: {local: {
                        position: { x: 0, y: -0.04 , z: 0.1 },
                        scale: { x: 0.8, y: 0.8, z: 0.8},
                       
                    }}
                }
            });
    }
}
}
}
}
