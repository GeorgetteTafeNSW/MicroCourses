# 📚 MicroCourses

**MicroCourses** is a fictional educational platform offering a diverse range of online courses to learners worldwide. Built using the **MERN stack** (MongoDB, Express, React, Node.js), this application provides a scalable and responsive web interface for browsing and managing courses.

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

---

## 🗂️ Module Schema & Example
```json```
{
    "name": ""
}

Example:
POST
```json
{
    "name": "Network Troubleshooting and Diagnostics"
}