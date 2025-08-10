# 📚 MicroCourses

**MicroCourses** is a fictional educational platform offering a diverse range of online courses to learners worldwide. Built using the **MERN stack** (MongoDB, Express, React, Node.js), this application provides a scalable and responsive web interface for browsing and managing courses.

---
## Setup Instructions:
### Back End

1. Download files in BackEnd folder: LINKHERE
2. Open powershell window in the downloaded folder
3. Run the following commands:
```
npm init
npm install express
node --env-file=config.env server.js
```

### Front End

1. Download files in FrontEnd folder: LINKHERE
2. Open powershell window in the downloaded folder
3. Run the following commands:

```
npm install
npm run dev
```

---
## 🗂️ Course Schema & Example

```json
{
  "title": "",
  "description": "",
  "longDescription": "",
  "duration": ,
  "imageName": "",
  "modules": []
}
```

Example (where imageName is a file that exists in the images folder and modules is a list of Ids which exist in the Modules collection):
POST
```json
{
    "title": "Cloud Computing and Virtualization",
    "description": "Explore cloud infrastructure, services, and deployment models.",
    "longDescription": "This course introduces students to cloud platforms such as AWS and Azure, covering virtualization, containerization, and cloud architecture. Students will gain hands-on experience with cloud services and deployment strategies.",
    "duration": 55,
    "imageName": "CloudComputing.jpg",
    "modules": [
        "6897ded32dfaabaa38f1f10d",
        "6897dee22dfaabaa38f1f113",
        "6897def02dfaabaa38f1f119",
        "6897deff2dfaabaa38f1f11f"
    ]
}
```
---

## 🗂️ Module Schema & Example
```json
{
    "name": ""
}
```

Example:
POST
```json
{
    "name": "Network Troubleshooting and Diagnostics"
}
```
---
## 🛠️ Problems Encountered

Uploading Images
Initial versions of this application involved storing images in the database as byte arrays but this had several downsides.
1. Storage overhead: storing these images, even though they are quite small bloated the disk size required by the database.
2. Conversion nightmares: In order to store + recall images, multiple stages of conversion needed to be done, which increases the opportuinity for bugs.
3. Bad practice: In general industry standards recommend not serving images directly from the main DB and instead using content delivery networks or cloud
    storage.

Since this project is more a proof of concept than a fully fledged production ready application, I decided instead to store the images on the server and only store the image name in the database. This then allowed me to serve the images via urls which point directly to the local version of the image.

---

## Future Improvements
See here: LINKHERE for information on how the application can utilise caching and load balancing among other things to support high availability and scalability
