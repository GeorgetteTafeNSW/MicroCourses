Course Document Schema:
{
    "title": "",
    "description": "",
    "longDescription": "",
    "duration": ,
    "imageName": "",
    "modules": []
}

Example (where imageName is a file that exists in the images folder and modules is a list of Ids which exist in the Modules collection):
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

Module Document Schema:
{
    "name": "Network Troubleshooting and Diagnostics"
}