---
sidebar_position: 1
---

# Question Bank

**Use search bar for quick access to Q & A.**

## Question 1

**You are authoring a set of nested azure resource manager templates to deploy multiple azure resources. The templates must be tested before deployment and must follow recommended practices. You need to validate and test the templates before deployment, which tools should u use to answer drag the appropriate tools to the correct requirements ,each tool maybe used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.**

1. Parameter file
2. Template function
3. Azure resource manager test tool kit
4. User defined function
5. What-if operation
6. Azure deployment manager

:::tip Answer

1. azure resource manager test tool kit
2. What-if operation

:::


## Question 2

**You are developing an Azure Durable Function to manage an online ordering process.The process must call an external API to gather product discount information. You need to implement the Azure Durable Function. Which Azure Durable Function types should you use? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.**

1. Orchestrator
2. Entity
3. Client
4. Activity


:::tip Answer

A & B (1 & 2)

:::

## Question 3

**You develop and deploy the following staticwebapp.config.json file to the app_location value specified in the workflow file of.**


:::tip Answer

All Yes

:::

## Question 4

**You develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous integration and continuous delivery (CI/CD) utility. The deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the registry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege. You need to ensure that the third-party utility can access the registry. Which authentication options should you use? To answer, select the appropriate options in the answer area**

**NOTE: Each correct selection is worth one point.**


:::tip Answer

1. Box 1: Service principal 
2. Box 2: AcrPush

:::

## Question 5

**Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain. Fourth Coffee is migrating this application to Azure. You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app. A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.**

**Which order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**


:::tip Answer

1. #bin bash
2. Az webapp create
3. Az webconfig container set
4. Az webapp config hostname add

:::

## Question #6

**Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set. You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.**

**Which of the following is the value that you should configure for the platformFaultDomainCount property?**

1. A. 10
2. B. 30
3. C. Min Value
4. D. Max Value

:::tip Answer

D 


:::

## Question #7

**Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set. You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.**

**Which of the following is the value that you should configure for the platformUpdateDomainCount property?**

1. A. 10
2. B. 20
3. C. 30
4. D. 40

:::tip Answer

D 

:::

## Question #8

**DRAG DROP -You are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application. You need to ensure that an email notification is sent when information is received from IoT devices, and that compute cost is reduced. You decide to deploy a function app.**

**Which of the following should you configure the function app to use? Answer by dragging the correct options from the list to the answer area. Select and Place:**

1. A. Azure cosmos db connector
2. B. Send grid action
3. C. Consumption plan
4. D. Azure event hubs binding
5. E. Send grid binding

:::tip Answer


3. C. Consumption plan
5. E. Send grid binding

:::

## Question #9

**This question requires that you evaluate the underlined text to determine if it is correct. You company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API. You need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account. You include the Data Management Gateway tool in your migration strategy.**

**Instructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the answer choice that makes the statement correct.**

1. A. No change required
2. B. mongorestore
3. C. Azure Storage Explorer
4. D. AzCopy

:::tip Answer

 B

:::

## Question #10

**You are developing an e-Commerce Web App. You want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and Azure Active Directory (AAD).**

**What should you do on the e-Commerce Web App**

1. A. Run the az keyvault secret command.
2. B. Enable Azure AD Connect.
3. C. Enable Managed Service Identity (MSI).
4. D. Create an Azure AD service principal.

:::tip Answer

 C 


:::

## Question #11

**This question requires that you evaluate the underlined text to determine if it is correct. Your Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it. Your developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type. The mobile application must be registered in Azure AD. You require a redirect URI from the developer for registration purposes.**

**Instructions: Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.**

1. A. No change required.
2. B. a secret
3. C. a login hint
4. D. a client ID

:::tip Answer

 A 

:::

## Question #12
**You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.**

**Which two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)**

1. A. EnabledForDeployment
2. B. EnablePurgeProtection
3. C. EnabledForTemplateDeployment
4. D. EnableSoftDelete

:::tip Answer

 B & D

:::

## Question #13

**HOTSPOT - You have an Azure Active Directory (Azure AD) tenant. You want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to all users when they access the Azure portal.**

**Which three settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct selection is worth one point.Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0001500001.png)

:::tip Answer

 ![](https://www.examtopics.com/assets/media/exam-media/04273/0001700001.png)

:::

## Question #14

**You manage an Azure SQL database that allows for Azure AD authentication.**

**You need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.**

**Which of the following should you implement?**

1. A. Azure AD token.

2. B. Azure Multi-Factor authentication.

3. C. Active Directory integrated authentication.

4. D. OATH software tokens.

:::tip Answer

C

:::

## Question #15

**You are developing an application to transfer data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and makes use of the Azure Key Vault APIs.**

**You want to configure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.**

**What should you do?**

1. A. Run the Add-AzKeyVaultKey cmdlet.

2. B. Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI.

3. C. Implement virtual network service endpoints for Azure Key Vault.

4. D. Run the az keyvault update --enable-soft-delete false CLI.

:::tip Answer

 B

:::

## Question #16

**HOTSPOT -**

**You have developed a Web App for your company. The Web App provides services and must run in multiple regions.**

**You want to be notified whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must minimize costs.**

**Which command should you use? To answer, select the appropriate settings in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0002100001.jpg)

:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0002200001.jpg)

:::

## Question #17

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of Azure Redis Cache in your design.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #18

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of an Azure Content Delivery Network (CDN) in your design.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

A

:::

## Question #19
**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.**

**You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.**

**Solution: You include the use of a Storage Area Network (SAN) in your design.**

**Does the solution meet the goal?**

1. A. Yes
2. B. No

:::tip Answer

B

:::

## Question #20

**You develop a Web App on a tier D1 app service plan.**

**You notice that page load times increase during periods of peak traffic.**

**You want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.**

**What should you do first?**

1. A. Enable autoscaling on the Web App.

2. B. Switch to the Premium App Service tier plan.

3. C. Switch to the Standard App Service tier plan.

4. D. Switch to the Azure App Services consumption plan.


:::tip Answer

C

:::

## Question #21

**Your company's Azure subscription includes an Azure Log Analytics workspace.**

**Your company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log Analytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked servers.**

**You must configure alerts based on the information gathered by the Azure Log Analytics workspace.**

**You have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert notification must be created when the alert is created and when the alert is resolved.**

**You need to make use of the necessary signal type when creating the alert rules.**

**Which of the following is the option you should use?**

1. A. The Activity log signal type.

2. B. The Application Log signal type.

3. C. The Metric signal type.

4. D. The Audit Log signal type.

:::tip Answer

C

:::

## Question #22

**You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.**

**You want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation.**

**You want the application to allow customers to search the index by using regular expressions.**

**What should you do?**

1. A. Configure the SearchMode property of the SearchParameters class.

2. B. Configure the QueryType property of the SearchParameters class.

3. C. Configure the Facets property of the SearchParameters class.

4. D. Configure the Filter property of the SearchParameters class.

:::tip Answer

B

:::

## Question #23

**You are a developer at your company. You need to update the definitions for an existing Logic App.**

**What should you use?**

1. A. the Enterprise Integration Pack (EIP)

2. B. the Logic App Code View

3. C. the API Connections

4. D. the Logic Apps Designer

:::tip Answer

B

:::

## Question #24

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Basic gateway credentials for the Azure resource.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #25

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Client cert gateway credentials for the HTTP(s) endpoint.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #26

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API. The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Basic gateway credentials for the HTTP(s) endpoint.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

B

:::

## Question #27

**Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.**

**You are developing a solution for a public facing API.The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end. You must configure back-end authentication for the API Management service instance.**

**Solution: You configure Client cert gateway credentials for the Azure resource.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer

A

:::

## Question #28

**You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers. You want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation venues. You want the application to list holiday accommodation venues that fall within a specific price range and are within a specified distance to an airport.**

**What should you do?**

1. A. Configure the SearchMode property of the SearchParameters class.

2. B. Configure the QueryType property of the SearchParameters class.

3. C. Configure the Facets property of the SearchParameters class.

4. D. Configure the Filter property of the SearchParameters class.

:::tip Answer

D

:::

## Question #29
**You are a developer at your company. You need to edit the workflows for an existing Logic App. What should you use?**

1. A. the Enterprise Integration Pack (EIP)
2. B. the Logic App Code View
3. C. the API Connections
4. D. the Logic Apps Designer

:::tip Answer

A

:::

## Question #30

**DRAG DROP -**

**You are a developer for a company that provides a bookings management service in the tourism industry. You are implementing Azure Search for the tour agencies listed in your company's solution. You create the index in Azure Search. You now need to use the Azure Search .NET SDK to import the relevant data into the Azure Search service. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions from left to right and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0003200001.jpg)


:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0003300001.jpg)

:::

## Question #31

**You are developing an application that applies a set of governance policies for internal and external services, as well as for applications. You develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts to events from Azure Event Grid and performs policy actions based on those events.**

**You have the following requirements:**

✑ **Authentication events must be used to monitor users when they sign in and sign out.**

✑ **All authentication events must be processed by PolicyApp.**

✑ **Sign outs must be processed as fast as possible.**

**What should you do?**

1. A. Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events.

2. B. Create a separate Azure Event Grid handler for sign-in and sign-out events.

3. C. Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events.

4. D. Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter.

:::tip Answer

D

:::

## Question #32

**HOTSPOT -**

**You are developing a C++ application that compiles to a native application named process.exe. The application accepts images as input and returns images in one of the following image formats: GIF, PNG, or JPEG. You must deploy the application as an Azure Function. You need to configure the function and host json files. How should you complete the json files? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0003600001.png)

:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0003700001.png)

:::

## Question #33

**HOTSPOT**

**You are developing an Azure Static Web app that contains training materials for a tool company. Each tool's training material is contained in a static web page that is linked from the tool's publicly available description page.**

**A user must be authenticated using Azure AD prior to viewing training.**

**You need to ensure that the user can view training material pages after authentication.**

**How should you complete the configuration file? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image377.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image378.png)

:::

## Question #34

**HOTSPOT**

**You are authoring a set of nested Azure Resource Manager templates to deploy Azure resources. You author an Azure Resource Manager template named mainTemplate.json that contains the following linked templates: linkedTemplate1.json, linkedTemplate2.json.**

**You add parameters to a parameters template file named mainTemplate.parameters,json. You save all templates on a local device in the C:\templates\ folder.**

**You have the following requirements:**

- **Store the templates in Azure for later deployment.**
- **Enable versioning of the templates.**
- **Manage access to the templates by using Azure RBAC.**
- **Ensure that users have read-only access to the templates.**
- **Allow users to deploy the templates.**

**You need to store the templates in Azure. How should you complete the command? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image379.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image380.png)
:::

## Question #35

**HOTSPOT**

**You are developing a service where customers can report news events from a browser using Azure Web PubSub. The service is implemented as an Azure Function App that uses the JSON WebSocket subprotocol to receive news events.**

**You need to implement the bindings for the Azure Function App.**

**How should you configure the binding? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image381.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image382.png)
:::

## Question #36

**HOTSPOT**

**You are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability zone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached to the VM.**

**You have the following requirements:**

- **The application must be able to quickly revert to the previous day's data if a systemic error is detected.**
- **The application must minimize downtime in the case of an Azure datacenter outage.**

**You need to provision the managed disk for the VM to maximize performance while meeting the requirements.**

**Which type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image383.png)

:::tip Answer

 ![](https://img.examtopics.com/az-204/image384.png)
:::

## Question #37

**HOTSPOT-**


**You are developing an application that includes two Docker containers. The application must meet the following requirements:**

1. **The containers must not run as root.**

2. **The containers must be deployed to Azure Container Instances by using a YAML file.**

3. **The containers must share a lifecycle, resources, local network, and storage volume.**

4. **The storage volume must persist through container crashes.**

5. **The storage volume must be deployed on stop or restart of the containers.**

**You need to configure Azure Container Instances for the application. Which configuration values should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**


:::tip Answer
 ![](https://img.examtopics.com/az-204/image386.png)
:::

## Question #38

**HOTSPOT -**

**You are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-premises SQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.**

✑ **Each instance of the WebJob processes data for a single customer and must run as a singleton instance.**

✑ **Each deployment must be tested by using deployment slots prior to serving production data.**

✑ **Azure costs must be minimized.**

✑ **Azure resources must be located in an isolated network.**

**You need to configure the App Service plan for the Web App. How should you configure the App Service plan? To answer, select the appropriate settings in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**
![](https://www.examtopics.com/assets/media/exam-media/04273/0008800001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0008900001.jpg)
:::

## Question #39

**DRAG DROP -**

**You are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure Function app that is triggered by an Azure Storage queue. You are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).You need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.**

**Which CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009000001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0009100001.jpg)
:::

## Question #40

**HOTSPOT -**

**You are creating a CLI script that creates an Azure web app and related services in Azure App Service. The web app uses the following variables:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009200001.png)

**You need to automatically deploy code from GitHub to the newly created web app. How should you complete the script? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0009300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0009400001.jpg)
:::


## Question #41

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2. When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Trigger the photo processing from Blob storage events.**

**Does the solution meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #42

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.** 

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Update the web.config file to include the applicationInitialization configuration element. Specify custom initialization actions to run the scripts. Does the solution meet the goal?**

1.  A. No
2.  B. Yes

:::tip Answer
A
:::

## Question #43

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.** 

**Does the solution meet the goal?**

1.   A. No
2.   B. Yes

:::tip Answer
B
:::

## Question #44

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the Production slot.**

**Does the solution meet the goal?**

1. A. No

2. B. Yes

:::tip Answer
B
:::

## Question #45

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.**

**When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Convert the Azure Storage account to a BlockBlobStorage storage account.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #46

**HOTSPOT -**

**You are developing an Azure Web App. You configure TLS mutual authentication for the web app. You need to validate the client certificate in the web app. To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010000001.jpg)


:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0010100001.jpg)
:::

## Question #47

**DRAG DROP -**

**You are developing a Docker/Go using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux. You identify a Docker container image to use. None of your current resource groups reside in a location that supports Linux. You must minimize the number of resource groups required. You need to create the application and perform an initial deployment.**

**Which three Azure CLI commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**


![](https://www.examtopics.com/assets/media/exam-media/04273/0010200001.png)


:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0010300001.png)
:::

## Question #48

**DRAG DROP -**

**Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain. Fourth Coffee is migrating this application to Azure. You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app. A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.**

**Which order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010500001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0010600001.jpg)
:::

## Question #49

**DRAG DROP -**

**You are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions application. The application must meet the following requirements:**

✑ **Reference the Azure Key Vault without requiring any changes to the Java code.**

✑ **Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.**

✑ **Ensure that instances are perpetually warm to avoid any cold starts.**

✑ **Connect to a VNet.**

✑ **Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted. You need to grant the Azure Functions application access to the Azure Key Vault.**

**Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0010800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0010900001.png)
:::

## Question #50

**You develop a website. You plan to host the website in Azure. You expect the website to experience high traffic volumes after it is published. You must ensure that the website remains available and responsive while minimizing cost. You need to deploy the website.**

**What should you do?**

1. A. Deploy the website to a virtual machine. Configure the virtual machine to automatically scale when the CPU load is high.

2. B. Deploy the website to an App Service that uses the Shared service tier. Configure the App Service plan to automatically scale when the CPU load is high.

3. C. Deploy the website to a virtual machine. Configure a Scale Set to increase the virtual machine instance count when the CPU load is high.

4. D. Deploy the website to an App Service that uses the Standard service tier. Configure the App Service plan to automatically scale when the CPU load is high.

:::tip Answer
D
:::

## Question #51

**HOTSPOT -**

**A company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp. The web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging.You need to create the web app and deploy the code.**

**How should you complete the commands? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0011100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0011200001.png)
:::

## Question #52

**HOTSPOT -**

**You have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store. You plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in Cosmos DB must be present and contain a numeric value. There are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time.**

**How should you complete the trigger?**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0011400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0011500001.jpg)
:::

## Question #53

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Use the Durable Function async pattern to process the blob data.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #54

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Pass the HTTP trigger payload into an Azure Service Bus queue to be processed by a queue trigger function and return an immediate HTTP success response.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #55

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob. The app continues to time out after four minutes. The app must process the blob data. You need to ensure the app does not time out and processes the blob data.**

**Solution: Configure the app to use an App Service hosting plan and enable the Always On setting.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
B
:::

## Question #56

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.You need to design the process that starts the photo processing.**

**Solution: Move photo processing to an Azure Function triggered from the blob upload.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #57

**You are developing an application that uses Azure Blob storage. The application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for auditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be retained for compliance reasons. You need to process the transaction logs asynchronously.**

**What should you do?**

1. A. Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app.

2. B. Enable the change feed on the storage account and process all changes for available events.

3. C. Process all Azure Storage Analytics logs for successful blob events.

4. D. Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events.

:::tip Answer
B
:::

## Question #58

**DRAG DROP -**

**You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll. You need to create a Dockerfile document that meets the following requirements:**

✑ **Call setupScripts.ps1 when the container is built.**

✑ **Run ContosoApp.dll when the container starts.**

**The Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.**

**Which five commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012100001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012100002.png)
:::

## Question #59

**You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.Images must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process images when the Function App is triggered. You need to configure the Function App.**

**What should you do?**

1. A. Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger.

2. B. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger.

3. C. Use a Consumption plan. Configure the Function App to use a Timer trigger.

4. D. Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger.

5. E. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger.

:::tip Answer
B
:::

## Question #60

**HOTSPOT -**

**You are configuring a new development environment for a Java application. The environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components. The VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is configured.**

**How should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012400001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012500001.png)
:::

## Question #61

**HOTSPOT -**

**You are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the order information into Azure Queue Storage. You need to review the Azure Function App code shown below.**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012700001.png)

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012700002.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012800001.png)
:::

## Question #62

**DRAG DROP -**

**You are developing a solution for a hospital to support the following use cases:**

✑ **The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.**

✑ **Patient health monitoring data retrieved must be the current version or the prior version.**

✑ **After a patient is discharged and all charges have been assessed, the patient billing record contains the final charges.**

**You provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for Indexing Mode to Consistent. You need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.**

**Which consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each consistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0012900004.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0012900005.png)
:::

## Question #63

**HOTSPOT -**

**You are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription. The development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to allow provisioning of a new team member development environment. You need to save the customized VM for future provisioning.**

**Which tools or services should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013100002.png)
:::

## Question #64

**You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script. You plan to use the Azure Web App continuous deployment feature. You need to run the static generation script before the website starts serving traffic.**

**What are two possible ways to achieve this goal? Each correct answer presents a complete solution.**

**NOTE: Each correct selection is worth one point.**

1. A. Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.

2. B. Add a PreBuild target in the websites csproj project file that runs the static content generation script.

3. C. Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.

4. D. Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website.

:::tip Answer
A & D
:::

## Question #65

**DRAG DROP -**

**You are developing an application to use Azure Blob storage. You have configured Azure Blob storage to include change feeds. A copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage account directly between the storage servers. You need to create a copy of the storage account in another region and copy the data.**

**In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013400002.jpg)
:::

## Question #66

**DRAG DROP -**

**You are preparing to deploy an Azure virtual machine (VM)-based application. The VMs that run the application have the following requirements:**

✑ **When a VM is provisioned the firewall must be automatically configured before it can access Azure resources.**

✑ **Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.**

**You need to ensure that the requirements are met. Which features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.** 

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013600002.jpg)
:::

## Question #67

**HOTSPOT -**

**A company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at https://github.com/TailSpinToys/webapp. The web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review. You need to create the web app and deploy the code.**

**How should you complete the commands? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0013800001.jpg)
:::

## Question #68

**HOTSPOT -**

**You are developing an application that needs access to an Azure virtual machine (VM). The access lifecycle for the application must be associated with the VM service instance. You need to enable managed identity for the VM.**

**How should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0013900001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014000001.jpg)
:::

## Question #69

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.**

**When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute. You need to design the process that starts the photo processing.**

**Solution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.**

**Does the solution meet the goal?**

1. A. Yes

2. B. No

:::tip Answer
A
:::

## Question #70

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.**

**After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot. You need to ensure that scripts run and resources are available before a swap operation occurs.**

**Solution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the**

**WEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response codes.**

**Does the solution meet the goal?**

1. A. No

2. B. Yes

:::tip Answer
A
:::

## Question #71

**HOTSPOT -**

**You create the following PowerShell script:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014200001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014300002.png)
:::

## Question #72

**DRAG DROP -**

**You are developing an Azure Function app. The app must meet the following requirements:**

✑ **Enable developers to write the functions by using the Rust language.**

✑ **Declaratively connect to an Azure Blob Storage account.**

**You need to implement the app. Which Azure Function app features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014500002.png)
:::

## Question #73

**HOTSPOT -**

**You are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers. The application needs to store runtime diagnostic data that must be persisted across application restarts. You have the following code:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014600001.jpg)

**You need to configure the application settings so that diagnostic data is stored as required. How should you configure the web app's settings? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0014700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0014700002.jpg)
:::

## Question #74

**You are developing a web app that is protected by Azure Web Application Firewall (WAF). All traffic to the web app is routed through an Azure Application Gateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net. All traffic must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps. You need to configure the Azure Application Gateway for the web app.**

**Which two actions should you perform? Each correct answer presents part of the solution.**

**NOTE: Each correct selection is worth one point.**

1. A. In the Azure Application Gateway's HTTP setting, enable the Use for App service setting.

2. B. Convert the web app to run in an Azure App service environment (ASE).

3. C. Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway.

4. D. In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net.

:::tip Answer
A & D
:::

## Question #75

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure  
Storage Blob storage. The storage account type is General-purpose V2.  
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.  
You need to design the process that starts the photo processing.  
Solution: Use the Azure Blob Storage change feed to trigger photo processing.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question #76

**You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores files in an Azure  
Storage account. The web application makes HTTP requests to external services as part of normal operations.  
The web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.  
You need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.  
What should you do?**

1.  A. Add the customer ID for the signed in user to the CorrelationContext in the web application
2.  B. On the current SpanContext, set the TraceId to the customer ID for the signed in user
3.  C. Set the header Ocp-Apim-Trace to the customer ID for the signed in user
4.  D. Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user

:::tip Answer
A
:::

## Question #77

**HOTSPOT -  
You are developing an Azure Function App. You develop code by using a language that is not supported by the Azure Function App host. The code language supports HTTP primitives.  
You must deploy the code to a production Azure Function App environment.  
You need to configure the app for deployment.  
Which configuration values should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point. 
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0015200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0015300001.png)
:::

## Question #78

**DRAG DROP -  
You provision virtual machines (VMs) as development environments.  
One VM does not start. The VM is stuck in a Windows update process. You attach the OS disk for the affected VM to a recovery VM.  
You need to correct the issue.  
In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0015500001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0015500002.jpg)
:::

## Question #79

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.  
The app continues to time out after four minutes. The app must process the blob data.  
You need to ensure the app does not time out and processes the blob data.  
Solution: Update the functionTimeout property of the host.json project file to 10 minutes.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
 B
:::

## Question #80

**HOTSPOT -  
You are developing an Azure Durable Function based application that processes a list of input values. The application is monitored using a console application that retrieves JSON data from an Azure Function diagnostic endpoint.  
During processing a single instance of invalid input does not cause the function to fail. Invalid input must be available to the monitoring application.  
You need to implement the Azure Durable Function and the monitoring console application.  
How should you complete the code segments? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**


![](https://www.examtopics.com/assets/media/exam-media/04273/0015800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0015900001.jpg)
:::

## Question #81

**You are developing an Azure Durable Function to manage an online ordering process.  
The process must call an external API to gather product discount information.  
You need to implement the Azure Durable Function.  
Which Azure Durable Function types should you use? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Orchestrator
2.  B. Entity
3.  C. Client
4.  D. Activity

:::tip Answer
A & B
:::

## Question #82

**DRAG DROP -  
You are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.  
The templates must be tested before deployment and must follow recommended practices.  
You need to validate and test the templates before deployment.  
Which tools should you use? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0016200001.png)


:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0016200002.png)
:::

## Question #83

**You develop Azure Durable Functions to manage vehicle loans.   
The loan process includes multiple actions that must be run in a specified order. One of the actions includes a customer credit check process, which may require multiple days to process.   
You need to implement Azure Durable Functions for the loan process.   
Which Azure Durable Functions type should you use?**

1.  A. orchestrator
2.  B. client
3.  C. entity
4.  D. activity

:::tip Answer
A
:::

## Question #84

**HOTSPOT-    
You are developing an Azure Function app.    
All functions in the app meet the following requirements:  
• Run until either a successful run or until 10 run attempts occur.  
• Ensure that there are at least 20 seconds between attempts for up to 15 minutes.  
You need to configure the host.json file.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.    
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image387.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image388.png)
:::

## Question #85

**You develop Azure Web Apps for a commercial diving company. Regulations require that all divers fill out a health questionnaire every 15 days after each diving job starts.  
You need to configure the Azure Web Apps so that the instance count scales up when divers are filling out the questionnaire and scales down after they are complete.  
You need to configure autoscaling.  
What are two possible auto scaling configurations to achieve this goal? Each correct answer presents a complete solution.   
NOTE: Each correct selection is worth one point.**

1.  A. Recurrence profile
2.  B. CPU usage-based autoscaling
3.  C. Fixed date profile
4.  D. Predictive autoscaling

:::tip Answer
C & D
:::

## Question #86

**HOTSPOT -  
You are developing a solution that uses the Azure Storage Client library for .NET. You have the following code: (Line numbers are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020500001.jpg)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0020600002.png)
:::

## Question #87

**You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.  
Customers have requested a service-level agreement (SLA) for viewing data older than 30 days.  
You need to document the minimum SLA for data recovery.  
Which SLA should you use?**

1.  A. at least two days
2.  B. between one and 15 hours
3.  C. at least one day
4.  D. between zero and 60 minutes

:::tip Answer
B
:::

## Question #88

**HOTSPOT -  
You are developing a ticket reservation system for an airline.  
The storage solution for the application must meet the following requirements:  
✑ Ensure at least 99.99% availability and provide low latency.  
✑ Accept reservations even when localized network outages or other unforeseen failures occur.  
✑ Process reservations in the exact sequence as reservations are submitted to minimize overbooking or selling the same seat to multiple travelers.  
✑ Allow simultaneous and out-of-order reservations with a maximum five-second tolerance window.  
You provision a resource group named airlineResourceGroup in the Azure South-Central US region.  
You need to provision a SQL API Cosmos DB account to support the app.  
How should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0020900001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0021100001.jpg)
:::

## Question #89

**HOTSPOT -  
You are preparing to deploy a Python website to an Azure Web App using a container. The solution will use multiple containers in the same container group. The  
Dockerfile that builds the container is as follows:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0021300001.png) 

**You build a container by using the following command. The Azure Container Registry instance named images is a private registry.** 

![](https://www.examtopics.com/assets/media/exam-media/04273/0021300002.png) 

**The user name and password for the registry is admin.  
The Web App must always run the same version of the website regardless of future builds.  
You need to create an Azure Web App to run the website.  
How should you complete the commands? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0021400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0021500001.jpg)
:::

## Question #90

**HOTSPOT -  
You are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.  
A rule already exists to scale up the App Service when the average queue length of unprocessed and valid queue messages is greater than 1000.  
You need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.  
How should you configure the Scale rule? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0021700001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0021900001.jpg)

**Box 1: Service bus queue -
You are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.**

**Box 2: ActiveMessage Count -
ActiveMessageCount: Messages in the queue or subscription that are in the active state and ready for delivery.**

**Box 3: Count -**

**Box 4: Less than or equal to -
You need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.**

**Box 5: Decrease count by**
:::

## Question #91

**DRAG DROP -  
You have an application that uses Azure Blob storage.  
You need to update the metadata of the blobs.  
Which three methods should you use to develop the solution? To answer, move the appropriate methods from the list of methods to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022100001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022100002.jpg)
:::

## Question #92

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce  
2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A
:::

## Question #93

**You develop Azure solutions.  
A .NET application needs to receive a message each time an Azure virtual machine finishes processing data. The messages must NOT persist after being processed by the receiving application.  
You need to implement the .NET object that will receive the messages.  
Which object should you use?**

1.  A. QueueClient
2.  B. SubscriptionClient
3.  C. TopicClient
4.  D. CloudQueueClient

:::tip Answer
D
:::

## Question #94

**DRAG DROP -  
You are maintaining an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.  
Data newer than three months must be available immediately. Data older than a year must be saved but does not need to be available immediately.  
You need to configure the account to support a lifecycle management rule that moves blob data to archive storage for data not modified in the last year.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022400002.jpg)
:::

## Question #95

**You develop Azure solutions.  
You must connect to a No-SQL globally-distributed database by using the .NET API.  
You need to create an object to configure and execute requests in the database.  
Which code segment should you use?**

1.  A. new Container(EndpointUri, PrimaryKey);
2.  B. new Database(EndpointUri, PrimaryKey);
3.  C. new CosmosClient(EndpointUri, PrimaryKey);

:::tip Answer
C
:::

## Question #96

**You have an existing Azure storage account that stores large volumes of data across multiple containers.  
You need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements:  
✑ Automate data movement.  
✑ Minimize user input required to perform the operation.  
✑ Ensure that the data movement process is recoverable.  
What should you use?**

1.  A. AzCopy
2.  B. Azure Storage Explorer
3.  C. Azure portal
4.  D. .NET Storage Client Library

:::tip Answer
A
:::

## Question #97

**DRAG DROP -  
You are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.  
You have the following requirements:  
✑ Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.  
✑ Must use only Azure Instance Metadata Service endpoints.  
You need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022700003.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0022800001.jpg)
:::

## Question #98
**DRAG DROP -  
You are developing a new page for a website that uses Azure Cosmos DB for data storage. The feature uses documents that have the following format:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022900001.png)

**You must display data for the new page in a specific order. You create the following query for the page:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0022900002.png) 

**You need to configure a Cosmos DB policy to support the query.  
How should you configure the policy? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0023100001.png)
:::

## Question #99

**HOTSPOT -  
You are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway.  
Data from traffic sensors are stored in Azure Event Hub.  
Traffic data is consumed by four departments. Each department has an Azure Web App that displays the time series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.  
Data throughput must be maximized. Latency must be minimized.  
You need to implement the Azure Event Hub.  
Which settings should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023300001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0023400001.png)
:::

## Question #100

**DRAG DROP -  
You are developing a microservices solution. You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster.  
You need to deploy a solution that includes the following features:  
✑ reverse proxy capabilities  
✑ configurable traffic routing  
✑ TLS termination with a custom certificate  
Which components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023500004.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0023600001.jpg)
:::

## Question #101

**You are implementing an order processing system. A point of sale application publishes orders to topics in an Azure Service Bus queue. The Label property for the topic includes the following data:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023700001.png)

**The system has the following requirements for subscriptions:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0023700002.png)

**You need to implement filtering and maximize throughput while evaluating filters.**
**Which filter types should you implement? To answer, drag the appropriate filter types to the correct subscriptions. Each filter type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

NOTE: Each correct selection is worth one point.

**Select and Place:**
![](https://www.examtopics.com/assets/media/exam-media/04273/0023800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0023900001.png)
:::

## Question #102
**Your company has several websites that use a company logo image. You use Azure Content Delivery Network (CDN) to store the static image.**

**You need to determine the correct process of how the CDN and the Point of Presence (POP) server will distribute the image and list the items in the correct order.**

**In which order do the actions occur? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024100001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024100002.jpg)
:::

## Question #103

**You are developing an Azure Cosmos DB solution by using the Azure Cosmos DB SQL API. The data includes millions of documents. Each document may contain hundreds of properties.**

**The properties of the documents do not contain distinct values for partitioning. Azure Cosmos DB must scale individual containers in the database to meet the performance needs of the application by spreading the workload evenly across all partitions over time.**

**You need to select a partition key.**

**Which two partition keys can you use? Each correct answer presents a complete solution.**

**NOTE: Each correct selection is worth one point.**

1. A. a single property value that does not appear frequently in the documents
2. B. a value containing the collection name
3. C. a single property value that appears frequently in the documents
4. D. a concatenation of multiple property values with a random suffix appended
5. E. a hash suffix appended to a property value

:::tip Answer
D & E
:::

## Question #104
**You are developing an Azure-hosted e-commerce web application. The application will use Azure Cosmos DB to store sales orders. You are using the latest SDK to manage the sales orders in the database.**

**You create a new Azure Cosmos DB instance. You include a valid endpoint and valid authorization key to an appSettings.json file in the code project.**

**You are evaluating the following application code: (Line number are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024400001.png)

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

NOTE: Each correct selection is worth one point.

Hot Area:
![](https://www.examtopics.com/assets/media/exam-media/04273/0024500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024500002.jpg)
:::

## Question #105
**You develop an Azure solution that uses Cosmos DB.**

**The current Cosmos DB container must be replicated and must use a partition key that is optimized for queries. You need to implement a change feed processor solution.**

**Which change feed processor components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view the content.**

**NOTE: Each correct selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024700002.png)
:::

## Question #106
**You are developing a web application that will use Azure Storage. Older data will be less frequently used than more recent data.**

**You need to configure data storage for the application. You have the following requirements:**
✑ Retain copies of data for five years.
✑ Minimize costs associated with storing data that is over one year old.
✑ Implement Zone Redundant Storage for application data.

**What should you do? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

**Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0024800004.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0024900001.png)
:::
## Question #107
**A company develops a series of mobile games. All games use a single leaderboard service.**

**You have the following requirements:**
✑ Code must be scalable and allow for growth.
✑ Each record must consist of a playerId, gameId, score, and time played.
✑ When users reach a new high score, the system will save the new score using the SaveScore function below.

**Each game is assigned an Id based on the series title.**

You plan to store customer information in Azure Cosmos DB. The following data already exists in the database:

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000001.png)

You develop the following code to save scores in the data store. (Line numbers are included for reference only.)

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000002.png)

You develop the following code to query the database. (Line numbers are included for reference only.)

![](https://www.examtopics.com/assets/media/exam-media/04273/0025000003.jpg)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

NOTE: Each correct selection is worth one point.

![](https://www.examtopics.com/assets/media/exam-media/04273/0025100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025100002.png)
:::

## Question #108

**You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account contains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.**

**You need to move the Azure Storage account to the new region. You must copy all data to the new region.**

**What should you do first?**

1. A. Export the Azure Storage account Azure Resource Manager template
2. B. Initiate a storage account failover
3. C. Configure object replication for all blobs
4. D. Use the AzCopy command line tool
5. E. Create a new Azure Storage account in the current region
6. F. Create a new subscription in the current region

:::tip Answer
A
:::

## Question #109
**You are developing an application to collect the following telemetry data for delivery drivers: first name, last name, package count, item id, and current location coordinates. The app will store the data in Azure Cosmos DB.**

**You need to configure Azure Cosmos DB to query the data.**

**Which values should you use? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04273/0025400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025500001.png)
:::

## Question #110

**You are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a new container instance.**

**You attempt to read a batch of 100 documents. The process fails when reading one of the documents. The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. You must prevent the change feed processor from retrying the entire batch when one document cannot be read.**

**You need to implement the change feed processor to read the documents.**

**Which features should you use? To answer, drag the appropriate features to the cored requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.**

**NOTE: Each cored selection is worth one point.**

**Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0025600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0025700001.jpg)
:::

## Question #111
**You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table:**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014000001.png)

**You plan to use the Azure Import/Export service to export data from Subscription1.**
**You need to identify which storage account can be used to export the data.**
**What should you identify?**

1. A. storage1
2. B. storage2
3. C. storage3
4. D. storage4

:::tip Answer
D
:::

## Question #112

**You have Azure Storage accounts as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014100001.jpg)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.**

**NOTE: Each correct selection is worth one point.**

Hot Area:
![](https://www.examtopics.com/assets/media/exam-media/04223/0014200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014200002.jpg)
:::

## Question #113
**You have Azure subscription that includes data in following locations:**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014300004.png)

**You plan to export data by using Azure import/export job named Export1.**
**You need to identify the data that can be exported by using Export1.**
**Which data should you identify?**

1. A. DB1
2. B. container1
3. C. share1
4. D. Table1

:::tip Answer
B
:::

## Question #114

**You have an Azure Storage account named storage1.**
**You have an Azure App Service app named App1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity.**
**You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:**
✑ Minimize the number of secrets used.
✑ Ensure that App2 can only read from storage1 for the next 30 days.
**What should you configure in storage1 for each app? To answer, select the appropriate options in the answer area.**

**NOTE: Each correct selection is worth one point.**

Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0014500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014600001.jpg)
:::

## Question #115

**You need to create an Azure Storage account that meets the following requirements:**
✑ Minimizes costs
✑ Supports hot, cool, and archive blob tiers
✑ Provides fault tolerance if a disaster affects the Azure region where the account resides

**How should you complete the command? To answer, select the appropriate options in the answer area.**

NOTE: Each correct selection is worth one point.
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0014700004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0014800001.jpg)
:::

## Question #116

**You have an Azure subscription that contains the resources in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0014900001.png)

**Store1 contains a file share named data. Data contains 5,000 files.**
**You need to synchronize the files in the file share named data to an on-premises server named Server1.**

**Which three actions should you perform? Each correct answer presents part of the solution.**

NOTE: Each correct selection is worth one point.

1. A. Create a container instance
2. B. Register Server1
3. C. Install the Azure File Sync agent on Server1
4. D. Download an automation script
5. E. Create a sync group

:::tip Answer
BCE
:::

## Question #117

**You have an Azure subscription that contains the resources shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04223/0015000001.png)

**The status of VM1 is Running.**
**You assign an Azure policy as shown in the exhibit. (Click the Exhibit tab.)**

![](https://www.examtopics.com/assets/media/exam-media/04223/0015100001.jpg)

**You assign the policy by using the following parameters:**
**Microsoft.ClassicNetwork/virtualNetworks**
**Microsoft.Network/virtualNetworks**
**Microsoft.Compute/virtualMachines**

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

**NOTE: Each correct selection is worth one point.**
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015200002.png)
:::

## Question #118

**You have an Azure subscription that contains a storage account.**
**You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data.**
**You need to transfer the data to the storage account by using the Azure Import/Export service.**

**In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.**

**NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.**

Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015400001.jpg)
:::

## Question #119
You have Azure subscription that includes following Azure file shares:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015500001.png)

You have the following on-premises servers:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015500002.png)

**You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.**
**You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1.**
**For each of the following statements, select Yes if the statement is true. Otherwise, select No.**

NOTE: Each correct selection is worth one point.
Hot Area:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015600002.jpg)
:::

## Question #120

**You have an Azure subscription named Subscription1.**
**You create an Azure Storage account named contosostorage, and then you create a file share named data.**

**Which UNC path should you include in a script that references files from the data file share? To answer, drag the appropriate values to the correct targets.**
**Each value may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.**

NOTE: Each correct selection is worth one point.
Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04223/0015700001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04223/0015800001.jpg)
:::

## Question #121

**HOTSPOT -  
You are developing an application that uses a premium block blob storage account. The application will process a large volume of transactions daily. You enable  
Blob storage versioning.  
You are optimizing costs by automating Azure Blob Storage access tiers. You apply the following policy rules to the storage account. (Line numbers are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0025800001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0025900001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0025900002.png)
:::

## Question #122

**An organization deploys Azure Cosmos DB.  
You need to ensure that the index is updated as items are created, updated, or deleted.  
What should you do?**

1.  A. Set the indexing mode to Lazy.
2.  B. Set the value of the automatic property of the indexing policy to False.
3.  C. Set the value of the EnableScanInQuery option to True.
4.  D. Set the indexing mode to Consistent.

:::tip Answer
 D
:::

## Question #123

**You are developing a .Net web application that stores data in Azure Cosmos DB. The application must use the Core API and allow millions of reads and writes.  
The Azure Cosmos DB account has been created with multiple write regions enabled. The application has been deployed to the East US2 and Central US regions.  
You need to update the application to support multi-region writes.  
What are two possible ways to achieve this goal? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application.
2.  B. Update Azure Cosmos DB to use the Strong consistency level. Add indexed properties to the container to indicate region.
3.  C. Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true.
4.  D. Create and deploy a custom conflict resolution policy.
5.  E. Update Azure Cosmos DB to use the Session consistency level. Send the SessionToken property value from the FeedResponse object of the write action to the end-user by using a cookie.

:::tip Answer
 C & D
:::

## Question #124

**HOTSPOT -  
You are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist of PDF, CSV,  
Microsoft Office format and plain text files.  
The solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:  
✑ Documents must be categorized by a customer identifier as they are uploaded to the storage account.  
✑ Allow filtering by the customer identifier.  
✑ Allow searching of information contained within a document  
✑ Minimize costs.  
You create and configure a standard general-purpose v2 storage account to support the solution.  
You need to implement the solution.  
What should you implement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0026300001.png)

:::tip Answer
  ![](https://www.examtopics.com/assets/media/exam-media/04273/0026400001.png)
:::

## Question #125

**HOTSPOT -  
You are developing a web application by using the Azure SDK. The web application accesses data in a zone-redundant BlockBlobStorage storage account.  
The application must determine whether the data has changed since the application last read the data. Update operations must use the latest data changes when writing data to the storage account.  
You need to implement the update operations.  
Which values should you use? To answer, select the appropriate option in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0026600001.png)

:::tip Answer
  ![](https://www.examtopics.com/assets/media/exam-media/04273/0026700001.png)
:::

## Question #126

**HOTSPOT -  
An organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.  
You need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0026800001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0026900001.jpg)

:::

## Question #127

**HOTSPOT -  
An organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.  
You need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0027000001.jpg)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0027000002.jpg)

:::

## Question #128

**HOTSPOT-  
You are developing an application that monitors data added to an Azure Blob storage account.  
You need to process each change made to the storage account.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image389.png)

:::tip Answer
  
![](https://img.examtopics.com/az-204/image390.png)

:::

## Question #129

**HOTSPOT-  
You develop an application that sells AI generated images based on user input. You recently started a marketing campaign that displays unique ads every second day.  
Sales data is stored in Azure Cosmos DB with the date of each sale being stored in a property named ‘whenFinished’.   
The marketing department requires a view that shows the number of sales for each unique ad.  
You need to implement the query for the view.    
How should you complete the query? To answer, select the appropriate options in the answer area.   
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image391.png)

:::tip Answer
  
![](https://img.examtopics.com/az-204/image392.png)

:::

## Question #130

**HOTSPOT-  
You implement an Azure solution to include Azure Cosmos DB, the latest Azure Cosmos DB SDK, and the Core (SQL) API. You also implement a change feed processor on a new container instance by using the Azure Functions trigger for Azure Cosmos DB.  
A large batch of documents continues to fail when reading one of the documents in the batch. The same batch of documents is continuously retried by the triggered function and a new batch of documents must be read.  
You need to implement the change feed processor to read the documents.  
Which feature should you implement? To answer, select the appropriate features in the answer area.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image393.png)

:::tip Answer
  
 ![](https://img.examtopics.com/az-204/image394.png)

:::

## Question #131

**You are developing an application to store business-critical data in Azure Blob storage.  
The application must meet the following requirements:  
• Data must not be modified or deleted for a user-specified interval.  
• Data must be protected from overwrites and deletes.  
• Data must be written once and allowed to be read many times.  
You need to protect the data in the Azure Blob storage account.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Configure a time-based retention policy for the storage account.
2.  B. Create an account shared-access signature (SAS).
3.  C. Enable the blob change feed for the storage account.
4.  D. Enable version-level immutability support for the storage account.
5.  E. Enable point-in-time restore for containers in the storage account.
6.  F. Create a service shared-access signature (SAS).

:::tip Answer
  
 A & F

:::

## Question #132

**You are updating an application that stores data on Azure and uses Azure Cosmos DB for storage. The application stores data in multiple documents associated with a single username.  
The application requires the ability to update multiple documents for a username in a single ACID operation.  
You need to configure Azure Cosmos DB.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Create a collection sharded on username to store documents.
2.  B. Configure Azure Cosmos DB to use the Gremlin API.
3.  C. Create an unsharded collection to store documents.
4.  D. Configure Azure Cosmos DB to use the MongoDB API.

:::tip Answer
  
 C & D

:::

## Question #133

**You develop Azure solutions.  
You must connect to a No-SQL globally-distributed database by using the .NET API.  
You need to create an object to configure and execute requests in the database.  
Which code segment should you use?**

1.  A. database_name = 'MyDatabase'  
    database = client.create_database_if_not_exists(id=database_name)
2.  B. client = CosmosClient(endpoint, key)
3.  C. container_name = 'MyContainer'  
    container = database.create_container_if_not_exists(  
    id=container_name, partition_key=PartitionKey(path="/lastName"), offer_throughput=400 )

:::tip Answer
  
 C

:::

## Question #134

**You are developing a Java application that uses Cassandra to store key and value data. You plan to use a new Azure Cosmos DB resource and the Cassandra  
API in the application. You create an Azure Active Directory (Azure AD) group named Cosmos DB Creators to enable provisioning of Azure Cosmos accounts, databases, and containers.  
The Azure AD group must not be able to access the keys that are required to access the data.  
You need to restrict access to the Azure AD group.  
Which role-based access control should you use?**

1.  A. DocumentDB Accounts Contributor
2.  B. Cosmos Backup Operator
3.  C. Cosmos DB Operator
4.  D. Cosmos DB Account Reader

:::tip Answer
  
 C

:::

## Question #135

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.  
You plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.  
You need to configure authorization.  
Solution: Configure the Azure Web App for the website to allow only authenticated requests and require Azure AD log on.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
 B

:::

## Question #136

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.  
You plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.  
You need to configure authorization.  
Solution:  
✑ Create a new Azure AD application. In the application's manifest, set value of the groupMembershipClaims option to All.  
✑ In the website, use the value of the groups claim from the JWT for the user to determine permissions.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
 A

:::

## Question #137

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.  
You plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.  
You need to configure authorization.  
Solution:  
✑ Create a new Azure AD application. In the application's manifest, define application roles that match the required permission levels for the application.  
✑ Assign the appropriate Azure AD group to each role. In the website, use the value of the roles claim from the JWT for the user to determine permissions.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
 B

:::

## Question #138

**DRAG DROP -  
You are developing an application to securely transfer data between on-premises file systems and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault. The application uses the Azure Key Vault APIs.  
The application must allow recovery of an accidental deletion of the key vault or key vault objects. Key vault objects must be retained for 90 days after deletion.  
You need to protect the key vault and key vault objects.  
Which Azure Key Vault feature should you use? To answer, drag the appropriate features to the correct actions. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0033400001.png)

:::tip Answer
  
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0033400002.png)

:::

## Question #139

**You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security (HSTS).  
Every request to the backend service must include a valid HTTP authorization header.  
You need to configure the Azure API Management instance with an authentication policy.  
Which two policies can you use? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Basic Authentication
2.  B. Digest Authentication
3.  C. Certificate Authentication
4.  D. OAuth Client Credential Grant

:::tip Answer
  
 C & D

:::

## Question #140

**DRAG DROP -  
You are developing an ASP.NET Core website that can be used to manage photographs which are stored in Azure Blob Storage containers.  
Users of the website authenticate by using their Azure Active Directory (Azure AD) credentials.  
You implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles.  
You need to configure the website's Azure AD Application so that user's permissions can be used with the Azure Blob containers.  
How should you configure the application? To answer, drag the appropriate setting to the correct location. Each setting can be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0033600001.png)

:::tip Answer
  
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0033600002.png)

:::

## Question #141

**HOTSPOT -  
You are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppFeatureFlagStore that contains a feature flag named Export.  
You need to update the app to meet the following requirements:  
✑ Use the Export feature in the app without requiring a restart of the app.  
✑ Validate users before users are allowed access to secure resources.  
✑ Permit users to access secure resources.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0033800001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0033900001.png)

:::

## Question #142

**You have an application that includes an Azure Web app and several Azure Function apps. Application secrets including connection strings and certificates are stored in Azure Key Vault.  
Secrets must not be stored in the application or application runtime environment. Changes to Azure Active Directory (Azure AD) must be minimized.  
You need to design the approach to loading application secrets.  
What should you do?**

1.  A. Create a single user-assigned Managed Identity with permission to access Key Vault and configure each App Service to use that Managed Identity.
2.  B. Create a single Azure AD Service Principal with permission to access Key Vault and use a client secret from within the App Services to access Key Vault.
3.  C. Create a system assigned Managed Identity in each App Service with permission to access Key Vault.
4.  D. Create an Azure AD Service Principal with Permissions to access Key Vault for each App Service and use a certificate from within the App Services to access Key Vault.

:::tip Answer
  
C

:::

## Question #143

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.  
If the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.  
You need to store the intake forms according to the requirements.  
Solution:** 
1. **Create an Azure Key Vault key named skey.**  
2. **Encrypt the intake forms using the public key portion of skey.**  
3. **Store the encrypted data in Azure Blob storage.**  
**Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
A

:::

## Question #144

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.  
If the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.  
You need to store the intake forms according to the requirements.  
Solution:**  
1. **Create an Azure Cosmos DB database with Storage Service Encryption enabled.**  
2. **Store the intake forms in the Azure Cosmos DB database.**  
**Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
B

:::

## Question #145

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.  
If the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.  
You need to store the intake forms according to the requirements.  
Solution: Store the intake forms as Azure Key Vault secrets.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
B

:::

## Question #146

**HOTSPOT -  
You plan to deploy a new application to a Linux virtual machine (VM) that is hosted in Azure.  
The entire VM must be secured at rest by using industry-standard encryption technology to address organizational security and compliance requirements.  
You need to configure Azure Disk Encryption for the VM.  
How should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0034400001.jpg)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0034500001.jpg)

:::

## Question #147

**Your company is developing an Azure API hosted in Azure.  
You need to implement authentication for the Azure API to access other Azure resources. You have the following requirements:  
✑ All API calls must be authenticated.  
✑ Callers to the API must not send credentials to the API.  
Which authentication mechanism should you use?**

1.  A. Basic
2.  B. Anonymous
3.  C. Managed identity
4.  D. Client certificate

:::tip Answer
  
C

:::

## Question #148

**DRAG DROP -  
You are developing an application. You have an Azure user account that has access to two subscriptions.  
You need to retrieve a storage account key secret from Azure Key Vault.  
In which order should you arrange the PowerShell commands to develop the solution? To answer, move all commands from the list of commands to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0034900001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0035000001.png)

:::

## Question #149

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop Azure solutions.  
You must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.  
You need to obtain an Azure Resource Manager access token.  
Solution: Use an X.509 certificate to authenticate the VM with Azure Resource Manager.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
B

:::

## Question #150

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop Azure solutions.  
You must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.  
You need to obtain an Azure Resource Manager access token.  
Solution: Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
B

:::

## Question #151

**HOTSPOT -  
You are building a website that is used to review restaurants. The website will use an Azure CDN to improve performance and add functionality to requests.  
You build and deploy a mobile app for Apple iPhones. Whenever a user accesses the website from an iPhone, the user must be redirected to the app store.  
You need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store.  
How should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0035300001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0035400001.png)

:::

## Question #152

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.  
You plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.  
You need to configure authorization.  
Solution:  
✑ Configure and use Integrated Windows Authentication in the website.  
✑ In the website, query Microsoft Graph API to load the groups to which the user is a member.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
B

:::

## Question #153

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You develop Azure solutions.  
You must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.  
You need to obtain an Azure Resource Manager access token.  
Solution: Run the Invoke-RestMethod cmdlet to make a request to the local managed identity for Azure resources endpoint.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
  
A

:::

## Question #154

**HOTSPOT -  
You are building a website to access project data related to teams within your organization. The website does not allow anonymous access. Authentication is performed using an Azure Active Directory (Azure AD) app named internal.  
The website has the following authentication requirements:  
✑ Azure AD users must be able to login to the website.  
✑ Personalization of the website must be based on membership in Active Directory groups.  
You need to configure the application's manifest to meet the authentication requirements.  
How should you configure the manifest? To answer, select the appropriate configuration in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0035800001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0035900001.png)

:::

## Question #155

**You develop an app that allows users to upload photos and videos to Azure storage. The app uses a storage REST API call to upload the media to a blob storage account named Account1. You have blob storage containers named Container1 and Container2.  
Uploading of videos occurs on an irregular basis.  
You need to copy specific blobs from Container1 to Container2 when a new video is uploaded.  
What should you do?**

1.  A. Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API
2.  B. Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet
3.  C. Use AzCopy with the Snapshot switch to copy blobs to Container2
4.  D. Download the blob to a virtual machine and then upload the blob to Container2

:::tip Answer
  
B

:::

## Question #156

**You are developing an ASP.NET Core website that uses Azure FrontDoor. The website is used to build custom weather data sets for researchers. Data sets are downloaded by users as Comma Separated Value (CSV) files. The data is refreshed every 10 hours.  
Specific files must be purged from the FrontDoor cache based upon Response Header values.  
You need to purge individual assets from the Front Door cache.  
Which type of cache purge should you use?**

1.  A. single path
2.  B. wildcard
3.  C. root domain

:::tip Answer
  
A

:::

## Question #157

**Your company is developing an Azure API.  
You need to implement authentication for the Azure API. You have the following requirements:  
All API calls must be secure.**

![](https://www.examtopics.com/assets/media/exam-media/04273/0036100004.png)

✑ **Callers to the API must not send credentials to the API.  
Which authentication mechanism should you use?**

1.  A. Basic
2.  B. Anonymous
3.  C. Managed identity
4.  D. Client certificate

:::tip Answer
  
C

:::

## Question #158

**You are a developer for a SaaS company that offers many web services.  
All web services for the company must meet the following requirements:  
✑ Use API Management to access the services  
✑ Use OpenID Connect for authentication  
✑ Prevent anonymous usage  
A recent security audit found that several web services can be called without any authentication.  
Which API Management policy should you implement?**

1.  A. jsonp
2.  B. authentication-certificate
3.  C. check-header
4.  D. validate-jwt

:::tip Answer
  
D

:::

## Question #159

**DRAG DROP -  
Contoso, Ltd. provides an API to customers by using Azure API Management (APIM). The API authorizes users with a JWT token.  
You must implement response caching for the APIM gateway. The caching mechanism must detect the user ID of the client that accesses data for a given location and cache the response for that user ID.  
You need to add the following policies to the policies file:  
✑ a set-variable policy to store the detected user identity  
✑ a cache-lookup-value policy  
✑ a cache-store-value policy  
✑ a find-and-replace policy to update the response body with the user profile information  
To which policy section should you add the policies? To answer, drag the appropriate sections to the correct policies. Each section may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0036400001.jpg)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0036500001.jpg)

:::

## Question #160

**DRAG DROP -  
You are developing an Azure solution.  
You need to develop code to access a secret stored in Azure Key Vault.  
How should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0036700001.png)

:::tip Answer
  
![](https://www.examtopics.com/assets/media/exam-media/04273/0036700002.png)

:::

## Question #161

**You are developing an Azure App Service REST API.  
The API must be called by an Azure App Service web app. The API must retrieve and update user profile information stored in Azure Active Directory (Azure AD).  
You need to configure the API to make the updates.  
Which two tools should you use? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Microsoft Graph API
2.  B. Microsoft Authentication Library (MSAL)
3.  C. Azure API Management
4.  D. Microsoft Azure Security Center
5.  E. Microsoft Azure Key Vault SDK

:::tip Answer
 A & C

:::

## Question #162

**You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.  
The token is compromised.  
You need to revoke the token.  
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Revoke the delegation key.
2.  B. Delete the stored access policy.
3.  C. Regenerate the account key.
4.  D. Remove the role assignment for the security principle.

:::tip Answer
 A & B

:::

## Question #163

**DRAG DROP -  
You are developing an Azure-hosted application that must use an on-premises hardware security module (HSM) key.  
The key must be transferred to your existing Azure Key Vault by using the Bring Your Own Key (BYOK) process.  
You need to securely transfer the key to Azure Key Vault.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0037000001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0037000002.jpg)

:::

## Question #164

**You develop and deploy an Azure Logic app that calls an Azure Function app. The Azure Function app includes an OpenAPI (Swagger) definition and uses an  
Azure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).  
The Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.  
You need to secure the Azure Logic app.  
What should you do?**

1.  A. Create a user-assigned managed identity and assign role-based access controls.
2.  B. Create an Azure AD custom role and assign the role to the Azure Blob storage account.
3.  C. Create an Azure Key Vault and issue a client certificate.
4.  D. Create a system-assigned managed identity and issue a client certificate.
5.  E. Create an Azure AD custom role and assign role-based access controls.

:::tip Answer
 A

:::

## Question #165

**HOTSPOT -  
You are developing an application that uses a premium block blob storage account. You are optimizing costs by automating Azure Blob Storage access tiers.  
You apply the following policy rules to the storage account. You must determine the implications of applying the rules to the data. (Line numbers are included for reference only.)**

![](https://www.examtopics.com/assets/media/exam-media/04273/0037300001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0037400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0037400002.png)

:::

## Question #166

**HOTSPOT -  
You have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:  
\$resourceGroupName = "testResourceGroup"  
\$accountName = "testCosmosAccount"  
\$databaseName = "testDatabase"  
\$containerName = "testContainer"  
\$partitionKeyPath = "/EmployeeId"  
\$autoscaleMaxThroughput = 5000**
  
**New-AzCosmosDBSqlContainer -  
\-ResourceGroupName \$resourceGroupName  
\-AccountName \$accountName  
\-DatabaseName \$databaseName  
\-Name \$containerName  
\-PartitionKeyKind Hash  
\-PartitionKeyPath \$partitionKeyPath  
\-AutoscaleMaxThroughput \$autoscaleMaxThroughput  
You create the following queries that target the container:  
SELECT \* FROM c WHERE c.EmployeeId \> '12345'  
SELECT \* FROM c WHERE c.UserID = '12345'  
For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0037800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0037800002.png)

:::

## Question #167

**HOTSPOT -  
You are developing a web application that makes calls to the Microsoft Graph API. You register the application in the Azure portal and upload a valid X509 certificate.  
You create an appsettings.json file containing the certificate name, client identifier for the application, and the tenant identifier of the Azure Active Directory (Azure  
AD). You create a method named ReadCertificate to return the X509 certificate by name.  
You need to implement code that acquires a token by using the certificate.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0038000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0038000002.png)

:::

## Question #168

**HOTSPOT -  
You develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous integration and continuous delivery (CI/CD) utility.  
The deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the registry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege.  
You need to ensure that the third-party utility can access the registry.  
Which authentication options should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0038200001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0038300001.png)

:::

## Question #169

**You deploy an Azure App Service web app. You create an app registration for the app in Azure Active Directory (Azure AD) and Twitter.  
The app must authenticate users and must use SSL for all communications. The app must use Twitter as the identity provider.  
You need to validate the Azure AD request in the app code.  
What should you validate?**

1.  A. ID token header
2.  B. ID token signature
3.  C. HTTP response code
4.  D. Tenant ID

:::tip Answer

A

:::

## Question #170

**You are developing a solution that will use a multi-partitioned Azure Cosmos DB database. You plan to use the latest Azure Cosmos DB SDK for development.  
The solution must meet the following requirements:  
✑ Send insert and update operations to an Azure Blob storage account.  
✑ Process changes to all partitions immediately.  
✑ Allow parallelization of change processing.  
You need to process the Azure Cosmos DB operations.  
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Create an Azure App Service API and implement the change feed estimator of the SDK. Scale the API by using multiple Azure App Service instances.
2.  B. Create a background job in an Azure Kubernetes Service and implement the change feed feature of the SDK.
3.  C. Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container.
4.  D. Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions.

:::tip Answer

A & C

:::

## Question #171

**A development team is creating a new REST API. The API will store data in Azure Blob storage. You plan to deploy the API to Azure App Service.  
Developers must access the Azure Blob storage account to develop the API for the next two months. The Azure Blob storage account must not be accessible by the developers after the two-month time period.  
You need to grant developers access to the Azure Blob storage account.  
What should you do?**

1.  A. Generate a shared access signature (SAS) for the Azure Blob storage account and provide the SAS to all developers.
2.  B. Create and apply a new lifecycle management policy to include a last accessed date value. Apply the policy to the Azure Blob storage account.
3.  C. Provide all developers with the access key for the Azure Blob storage account. Update the API to include the Coordinated Universal Time (UTC) timestamp for the request header.
4.  D. Grant all developers access to the Azure Blob storage account by assigning role-based access control (RBAC) roles.

:::tip Answer

A 

:::

## Question #172

**DRAG DROP -  
You develop a web application.  
You need to register the application with an active Azure Active Directory (Azure AD) tenant.  
Which three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0038600001.jpg)

:::tip Answer

 ![](https://www.examtopics.com/assets/media/exam-media/04273/0038700001.jpg) 

:::

## Question #173

**You have a new Azure subscription. You are developing an internal website for employees to view sensitive data. The website uses Azure Active Directory (Azure  
AD) for authentication.  
You need to implement multifactor authentication for the website.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Configure the website to use Azure AD B2C.
2.  B. In Azure AD, create a new conditional access policy.
3.  C. Upgrade to Azure AD Premium.
4.  D. In Azure AD, enable application proxy.
5.  E. In Azure AD conditional access, enable the baseline policy.

:::tip Answer

B & C

:::

## Question #174

**DRAG DROP -  
An organization plans to deploy Azure storage services.  
You need to configure shared access signature (SAS) for granting access to Azure Storage.  
Which SAS types should you use? To answer, drag the appropriate SAS types to the correct requirements. Each SAS type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0038900001.jpg)

:::tip Answer

 ![](https://www.examtopics.com/assets/media/exam-media/04273/0038900002.jpg)

:::

## Question #175

**HOTSPOT -  
You are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppFeatureflagStore as shown in the exhibit:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0039000001.png)

**You must be able to use the feature in the app by using the following markup:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0039000002.jpg)

**You need to update the app to use the feature flag.  
Which values should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0039100001.png)

:::tip Answer

 ![](https://www.examtopics.com/assets/media/exam-media/04273/0039200001.jpg)
:::

## Question #176

**HOTSPOT -  
You have a single page application (SPA) web application that manages information based on data returned by Microsoft Graph from another company's Azure  
Active Directory (Azure AD) instance.  
Users must be able to authenticate and access Microsoft Graph by using their own company's Azure AD instance.  
You need to configure the application manifest for the app registration.  
How should you complete the manifest? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0039400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0039500001.png)
:::

## Question #177

**You manage a data processing application that receives requests from an Azure Storage queue.  
You need to manage access to the queue. You have the following requirements:  
✑ Provide other applications access to the Azure queue.  
✑ Ensure that you can revoke access to the queue without having to regenerate the storage account keys.  
✑ Specify access at the queue level and not at the storage account level.  
Which type of shared access signature (SAS) should you use?**

1.  A. Service SAS with a stored access policy
2.  B. Account SAS
3.  C. User Delegation SAS
4.  D. Service SAS with ad hoc SAS

:::tip Answer
A
:::

## Question #178

**HOTSPOT -  
You are developing an application to store and retrieve data in Azure Blob storage. The application will be hosted in an on-premises virtual machine (VM). The  
VM is connected to Azure by using a Site-to-Site VPN gateway connection. The application is secured by using Azure Active Directory (Azure AD) credentials.  
The application must be granted access to the Azure Blob storage account with a start time, expiry time, and read permissions. The Azure Blob storage account access must use the Azure AD credentials of the application to secure data access. Data access must be able to be revoked if the client application security is breached.  
You need to secure the application access to Azure Blob storage.  
Which security features should you use? To answer select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0039900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0040000001.jpg)
:::

## Question #179

**You are building a web application that uses the Microsoft identity platform for user authentication.  
You are implementing user identification for the web application.  
You need to retrieve a claim to uniquely identify a user.  
Which claim type should you use?**

1.  A. aud
2.  B. nonce
3.  C. oid
4.  D. idp

:::tip Answer
C
:::

## Question #180

**You are developing an Azure Function that calls external APIs by providing an access token for the API. The access token is stored in a secret named token in an  
Azure Key Vault named mykeyvault.  
You need to ensure the Azure Function can access to the token. Which value should you store in the Azure Function App configuration?**

1.  A. KeyVault:mykeyvault;Secret:token
2.  B. App:Settings:Secret:mykeyvault:token
3.  C. AZUREKVCONNSTR\_ https://mykeyveult.vault.ezure.net/secrets/token/
4.  D. @Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)

:::tip Answer
D
:::

## Question #181

**A company maintains multiple web and mobile applications. Each application uses custom in-house identity providers as well as social identity providers.  
You need to implement single sign-on (SSO) for all the applications.  
What should you do?**

1.  A. Use Azure Active Directory B2C (Azure AD B2C) with custom policies.
2.  B. Use Azure Active Directory B2B (Azure AD B2B) and enable external collaboration.
3.  C. Use Azure Active Directory B2C (Azure AD B2C) with user flows.
4.  D. Use Azure Active Directory B2B (Azure AD B2B).

:::tip Answer
B
:::

## Question #182

**You develop a Python application for image rendering that uses GPU resources to optimize rendering processes. You deploy the application to an Azure  
Container Instances (ACI) Linux container.  
The application requires a secret value to be passed when the container is started. The value must only be accessed from within the container.  
You need to pass the secret value.  
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Create an environment variable Set the secureValue property to the secret value.
2.  B. Add the secret value to the container image. Use a managed identity.
3.  C. Add the secret value to the application code Set the container startup command.
4.  D. Add the secret value to an Azure Blob storage account. Generate a SAS token.
5.  E. Mount a secret volume containing the secret value in a secrets file.

:::tip Answer
A & E
:::

## Question #183

**You are developing a user portal for a company.  
You need to create a report for the portal that lists information about employees who are subject matter experts for a specific topic. You must ensure that administrators have full control and consent over the data.  
Which technology should you use?**

1.  A. Microsoft Graph data connect
2.  B. Microsoft Graph API
3.  C. Microsoft Graph connectors

:::tip Answer
A 
:::

## Question #184

**HOTSPOT -  
You are a developer building a web site using a web app. The web site stores configuration data in Azure App Configuration.  
Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.  
You need to load configuration data from Azure App Configuration.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0040600001.png)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0040700001.png) 
:::

## Question #185

**HOTSPOT -  
You are building an application that stores sensitive customer data in Azure Blob storage. The data must be encrypted with a key that is unique for each customer.  
If the encryption key has been corrupted it must not be used for encryption.  
You need to ensure that the blob is encrypted.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0041000001.png)

:::tip Answer
  ![](https://www.examtopics.com/assets/media/exam-media/04273/0041100001.png)
:::

## Question #186

**HOTSPOT-  
You are developing a web application that uses the Microsoft Identity platform for user and resource authentication. The web application called several REST APIs.  
You are implementing various authentication and authorization flows for the web application.  
You need to validate the claims in the authentication token.  
Which token type should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image395.png)

:::tip Answer
 ![](https://img.examtopics.com/az-204/image396.png)
:::

## Question #187

**HOTSPOT-  
You are developing a content management application for technical manuals. The application is deployed as an Azure Static Web app.  
Authenticated users can view pages under/manuals but only contributors can access the page /manuals/new.html.  
You need to configure the routing for the web app.  
How should you complete the configuration? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point**.

![](https://img.examtopics.com/az-204/image397.png)

:::tip Answer
 ![](https://img.examtopics.com/az-204/image398.png)
:::

## Question #188

**You are developing a web application that uses the Microsoft identity platform for user and resource authentication. The web application calls several REST APIs.  
A REST API call must read the user’s calendar. The web application requires permission to send an email as the user.  
You need to authorize the web application and the API.  
Which parameter should you use?**

1.  A. tenant
2.  B. code_challenge
3.  C. state
4.  D. client_id
5.  E. scope

:::tip Answer
 E
:::

## Question #189

**HOTSPOT-  
You develop and deploy a web app to Azure App service. The web app allows users to authenticate by using social identity providers through the Azure B2C service. All user profile information is stored in Azure B2C.  
You must update the web app to display common user properties from Azure B2C to include the following information:  
• Email address  
• Job title  
• First name  
• Last name  
• Office location  
You need to implement the user properties in the web app.  
Which code library and API should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image399.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image400.png)
:::

## Question #190

**HOTSPOT-  
You develop and deploy the following staticwebapp.config.json file to the app_location value specified in the workflow file of an Azure Static Web app:**

![](https://img.examtopics.com/az-204/image401.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image402.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image403.png)
:::

## Question #191

**You develop and deploy an Azure App Service web app named App1. You create a new Azure Key Vault named Vault1. You import several API keys, passwords, certificates, and cryptographic keys into Vault1.  
You need to grant App1 access to Vault1 and automatically rotate credentials. Credentials must not be stored in code.  
What should you do?**

1.  A. Enable App Service authentication for Appl. Assign a custom RBAC role to Vault1.
2.  B. Add a TLS/SSL binding to App1.
3.  C. Upload a self-signed client certificate to Vault1. Update App1 to use the client certificate.
4.  D. Assign a managed identity to App1.

:::tip Answer
D
:::

## Question #192

**You are developing a Java application to be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.  
You need to configure Always Encrypted to encrypt the sensitive data inside the application.  
What should you do first?**

1.  A. Create a new container to include an encryption policy with the JSON properties to be encrypted.
2.  B. Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance.
3.  C. Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB.
4.  D. Create an Azure AD managed identity and assign the identity to a new Azure Key Vault instance.

:::tip Answer
B
:::

## Question #193

**HOTSPOT-  
You develop a web app that interacts with Azure Active Directory (Azure AD) groups by using Microsoft Graph.  
You build a web page that shows all Azure AD groups that are not of the type 'Unified'.  
You need to build the Microsoft Graph query for the page.  
How should you complete the query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image404.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image405.png)
:::

## Question #194

**DRAG DROP-  
You are developing an Azure solution.  
You need to develop code to access a secret stored in Azure Key Vault.  
How should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image406.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image407.png)
:::

## Question #195

**HOTSPOT-  
You are a developer building a web site using a web app. The web site stores configuration data in Azure App Configuration.  
Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.  
You need to load configuration data from Azure App Configuration.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
**

![](https://img.examtopics.com/az-204/image408.png)

:::tip Answer
 ![](https://img.examtopics.com/az-204/image409.png)
:::


## Question #196

**DRAG DROP -  
You develop a web app that uses the tier D1 app service plan by using the Web Apps feature of Microsoft Azure App Service.  
Spikes in traffic have caused increases in page load times.  
You need to ensure that the web app automatically scales when CPU load is about 85 percent and minimize costs.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0045400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0045500001.jpg)
:::

## Question #197

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.  
You are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.  
You must use a storage mechanism with the following requirements:  
✑ Share session state across all ASP.NET web applications.  
✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.  
✑ Save full HTTP responses for concurrent requests.  
You need to store the information.  
Proposed Solution: Enable Application Request Routing (ARR).  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question #198

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.  
You are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.  
You must use a storage mechanism with the following requirements:  
✑ Share session state across all ASP.NET web applications.  
✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.  
✑ Save full HTTP responses for concurrent requests.  
You need to store the information.  
Proposed Solution: Deploy and configure an Azure Database for PostgreSQL. Update the web applications.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

# Question #199

**HOTSPOT -  
A company is developing a gaming platform. Users can join teams to play online and see leaderboards that include player statistics. The solution includes an entity named Team.  
You plan to implement an Azure Redis Cache instance to improve the efficiency of data operations for entities that rarely change.  
You need to invalidate the cache when team data is changed.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0045800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0045900001.jpg)
:::

## Question #200

**DRAG DROP -  
A company has multiple warehouses. Each warehouse contains IoT temperature devices which deliver temperature data to an Azure Service Bus queue.  
You need to send email alerts to facility supervisors immediately if the temperature at a warehouse goes above or below specified threshold temperatures.  
Which five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0046000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0046100001.png)
:::

## Question #201

**DRAG DROP -  
You develop an ASP.NET Core MVC application. You configure the application to track webpages and custom events.  
You need to identify trends in application usage.  
Which Azure Application Insights Usage Analysis features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0046200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0046200002.png)
:::

## Question #202

**You develop a gateway solution for a public facing news API. The news API back end is implemented as a RESTful service and uses an OpenAPI specification.  
You need to ensure that you can access the news API by using an Azure API Management service instance.  
Which Azure PowerShell command should you run?**

1.  A. Import-AzureRmApiManagementApi -Context \$ApiMgmtContext -SpecificationFormat "Swagger" -SpecificationPath \$SwaggerPath -Path \$Path
2.  B. New-AzureRmApiManagementBackend -Context \$ApiMgmtContext -Url \$Url -Protocol http
3.  C. New-AzureRmApiManagement -ResourceGroupName \$ResourceGroup -Name \$Name ג€"Location \$Location -Organization \$Org -AdminEmail \$AdminEmail
4.  D. New-AzureRmApiManagementBackendProxy -Url \$ApiUrl

:::tip Answer
D
:::

## Question #203

**You are creating a hazard notification system that has a single signaling server which triggers audio and visual alarms to start and stop.  
You implement Azure Service Bus to publish alarms. Each alarm controller uses Azure Service Bus to receive alarm signals as part of a transaction. Alarm events must be recorded for audit purposes. Each transaction record must include information about the alarm type that was activated.  
You need to implement a reply trail auditing solution.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Assign the value of the hazard message SessionID property to the ReplyToSessionId property.
2.  B. Assign the value of the hazard message MessageId property to the DevileryCount property.
3.  C. Assign the value of the hazard message SessionID property to the SequenceNumber property.
4.  D. Assign the value of the hazard message MessageId property to the CorrelationId property.
5.  E. Assign the value of the hazard message SequenceNumber property to the DeliveryCount property.
6.  F. Assign the value of the hazard message MessageId property to the SequenceNumber property.

:::tip Answer
A & D
:::

## Question \#204

**You are developing an Azure function that connects to an Azure SQL Database instance. The function is triggered by an Azure Storage queue.  
You receive reports of numerous System.InvalidOperationExceptions with the following message:  
\`Timeout expired. The timeout period elapsed prior to obtaining a connection from the pool. This may have occurred because all pooled connections were in use and max pool size was reached.\`  
You need to prevent the exception.  
What should you do?**

1.  A. In the host.json file, decrease the value of the batchSize option
2.  B. Convert the trigger to Azure Event Hub
3.  C. Convert the Azure Function to the Premium plan
4.  D. In the function.json file, change the value of the type option to queueScaling

:::tip Answer
C
:::

## Question \#205

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.  
You are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.  
You must use a storage mechanism with the following requirements:  
✑ Share session state across all ASP.NET web applications.  
✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.  
✑ Save full HTTP responses for concurrent requests.  
You need to store the information.  
Proposed Solution: Deploy and configure Azure Cache for Redis. Update the web applications.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A
:::

## Question \#206

**HOTSPOT -  
You are debugging an application that is running on Azure Kubernetes cluster named cluster1. The cluster uses Azure Monitor for containers to monitor the cluster.  
The application has sticky sessions enabled on the ingress controller.  
Some customers report a large number of errors in the application over the last 24 hours.  
You need to determine on which virtual machines (VMs) the errors are occurring.  
How should you complete the Azure Monitor query? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0046900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0047100001.png)
:::

## Question \#207

**HOTSPOT -  
You plan to deploy a web app to App Service on Linux. You create an App Service plan. You create and push a custom Docker image that contains the web app to Azure Container Registry.  
You need to access the console logs generated from inside the container in real-time.  
How should you complete the Azure CLI command? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0047300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0047300002.png)
:::

## Question \#208

**You develop and deploy an ASP.NET web app to Azure App Service. You use Application Insights telemetry to monitor the app.  
You must test the app to ensure that the app is available and responsive from various points around the world and at regular intervals. If the app is not responding, you must send an alert to support staff.  
You need to configure a test for the web app.  
Which two test types can you use? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. integration
2.  B. multi-step web
3.  C. URL ping
4.  D. unit
5.  E. load

:::tip Answer
B & C
:::

## Question \#209

**DRAG DROP -  
A web service provides customer summary information for e-commerce partners. The web service is implemented as an Azure Function app with an HTTP trigger.  
Access to the API is provided by an Azure API Management instance. The API Management instance is configured in consumption plan mode. All API calls are authenticated by using OAuth.  
API calls must be cached. Customers must not be able to view cached data for other customers.  
You need to configure API Management policies for caching.  
How should you complete the policy statement?  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0047600001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0047600002.jpg)
:::

## Question \#210

**You are developing applications for a company. You plan to host the applications on Azure App Services.  
The company has the following requirements:  
✑ Every five minutes verify that the websites are responsive.  
✑ Verify that the websites respond within a specified time threshold. Dependent requests such as images and JavaScript files must load properly.  
✑ Generate alerts if a website is experiencing issues.  
✑ If a website fails to load, the system must attempt to reload the site three more times.  
You need to implement this process with the least amount of effort.  
What should you do?**

1.  A. Create a Selenium web test and configure it to run from your workstation as a scheduled task.
2.  B. Set up a URL ping test to query the home page.
3.  C. Create an Azure function to query the home page.
4.  D. Create a multi-step web test to query the home page.
5.  E. Create a Custom Track Availability Test to query the home page.

:::tip Answer
D
:::

## Question \#211

**You develop and add several functions to an Azure Function app that uses the latest runtime host. The functions contain several REST API endpoints secured by using SSL. The Azure Function app runs in a Consumption plan.  
You must send an alert when any of the function endpoints are unavailable or responding too slowly.  
You need to monitor the availability and responsiveness of the functions.  
What should you do?**

1.  A. Create a URL ping test.
2.  B. Create a timer triggered function that calls TrackAvailability() and send the results to Application Insights.
3.  C. Create a timer triggered function that calls GetMetric("Request Size") and send the results to Application Insights.
4.  D. Add a new diagnostic setting to the Azure Function app. Enable the FunctionAppLogs and Send to Log Analytics options.

:::tip Answer
B
:::

## Question \#212

**DRAG DROP -  
You are developing an application to retrieve user profile information. The application will use the Microsoft Graph SDK.  
The app must retrieve user profile information by using a Microsoft Graph API call.  
You need to call the Microsoft Graph API from the application.  
In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:  **

![](https://www.examtopics.com/assets/media/exam-media/04273/0047900001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0048000001.jpg)
:::


## Question \#213

**DRAG DROP -  
You develop and deploy an Azure Logic App that calls an Azure Function app. The Azure Function App includes an OpenAPI (Swagger) definition and uses an  
Azure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).  
The Logic App must use Azure Monitor logs to record and store information about runtime data and events. The logs must be stored in the Azure Blob storage account.  
You need to set up Azure Monitor logs and collect diagnostics data for the Azure Logic App.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0048100001.png)

:::tip Answer
  ![](https://www.examtopics.com/assets/media/exam-media/04273/0048200001.png)
:::

## Question \#214

**DRAG DROP -  
You develop an application. You plan to host the application on a set of virtual machines (VMs) in Azure.  
You need to configure Azure Monitor to collect logs from the application.  
Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0048300001.png)

:::tip Answer
  ![](https://www.examtopics.com/assets/media/exam-media/04273/0048300002.png)
:::


## Question \#215

**You develop and deploy an Azure App Service web app. The app is deployed to multiple regions and uses Azure Traffic Manager. Application Insights is enabled for the app.  
You need to analyze app uptime for each month.  
Which two solutions will achieve the goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Azure Monitor logs
2.  B. Application Insights alerts
3.  C. Azure Monitor metrics
4.  D. Application Insights web tests

:::tip Answer
B & D
:::

## Question \#216

**DRAG DROP -  
You develop and deploy an Azure App Service web app. The web app accesses data in an Azure SQL database.  
You must update the web app to store frequently used data in a new Azure Cache for Redis Premium instance.  
You need to implement the Azure Cache for Redis features.  
Which feature should you implement? To answer, drag the appropriate feature to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0048700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0048700002.png)
:::


## Question \#217

**You are developing an ASP.NET Core Web API web service. The web service uses Azure Application Insights for all telemetry and dependency tracking. The web service reads and writes data to a database other than Microsoft SQL Server.  
You need to ensure that dependency tracking works for calls to the third-party database.  
Which two dependency telemetry properties should you use? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Telemetry.Context.Cloud.RoleInstance
2.  B. Telemetry.Id
3.  C. Telemetry.Name
4.  D. Telemetry.Context.Operation.Id
5.  E. Telemetry.Context.Session.Id

:::tip Answer
B & D
:::

## Question \#218

**HOTSPOT -  
You are using Azure Front Door Service.  
You are expecting inbound files to be compressed by using Brotli compression. You discover that inbound XML files are not compressed. The files are 9 megabytes (MB) in size.  
You need to determine the root cause for the issue.  
To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0048900001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0049000001.jpg)
:::

## Question \#219

**HOTSPOT -  
You are developing an Azure App Service hosted ASP.NET Core web app to deliver video-on-demand streaming media. You enable an Azure Content Delivery  
Network (CDN) Standard for the web endpoint. Customer videos are downloaded from the web app by using the following example URL: http://www.contoso.com/ content.mp4?quality=1.  
All media content must expire from the cache after one hour. Customer videos with varying quality must be delivered to the closest regional point of presence  
(POP) node.  
You need to configure Azure CDN caching rules.  
Which options should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**   

![](https://www.examtopics.com/assets/media/exam-media/04273/0049200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0049300001.jpg)
:::

## Question \#220

**HOTSPOT -  
You are developing an ASP.NET Core time sheet application that runs as an Azure Web App. Users of the application enter their time sheet information on the first day of every month.  
The application uses a third-party web service to validate data.  
The application encounters periodic server errors due to errors that result from calling a third-party web server. Each request to the third-party server has the same chance of failure.  
You need to configure an Azure Monitor alert to detect server errors unrelated to the third-party service. You must minimize false-positive alerts.  
How should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0049500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0049600001.jpg)
:::

## Question \#221

**You are developing a web application that uses Azure Cache for Redis. You anticipate that the cache will frequently fill and that you will need to evict keys.  
You must configure Azure Cache for Redis based on the following predicted usage pattern: A small subset of elements will be accessed much more often than the rest.  
You need to configure the Azure Cache for Redis to optimize performance for the predicted usage pattern.  
Which two eviction policies will achieve the goal?  
NOTE: Each correct selection is worth one point.**

1.  A. noeviction
2.  B. allkeys-lru
3.  C. volatile-lru
4.  D. allkeys-random
5.  E. volatile-ttl
6.  F. volatile-random

:::tip Answer
B & C
:::

## Question \#222

**DRAG DROP -  
An organization has web apps hosted in Azure.  
The organization wants to track events and telemetry data in the web apps by using Application Insights.  
You need to configure the web apps for Application Insights.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0049800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0049800002.jpg)
:::


## Question \#223

**An organization hosts web apps in Azure. The organization uses Azure Monitor.  
You discover that configuration changes were made to some of the web apps.  
You need to identify the configuration changes.  
Which Azure Monitor log should you review?**

1.  A. AppServiceAppLogs
2.  B. AppServiceEnvironmentPlatformlogs
3.  C. AppServiceConsoleLogs
4.  D. AppServiceAuditLogs

:::tip Answer
B
:::

## Question \#224

**You develop and deploy an Azure App Service web app to a production environment. You enable the Always On setting and the Application Insights site extensions.  
You deploy a code update and receive multiple failed requests and exceptions in the web app.  
You need to validate the performance and failure counts of the web app in near real time.  
Which Application Insights tool should you use?**

1.  A. Profiler
2.  B. Smart Detection
3.  C. Live Metrics Stream
4.  D. Application Map
5.  E. Snapshot Debugger

:::tip Answer
C
:::

## Question \#225

**HOTSPOT -  
You deploy an ASP.NET web app to Azure App Service.  
You must monitor the web app by using Application Insights.  
You need to configure Application Insights to meet the requirements.  
Which feature should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0050200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0050300001.png)
:::

## Question \#226

**You are building a web application that performs image analysis on user photos and returns metadata containing objects identified. The image analysis is very costly in terms of time and compute resources. You are planning to use Azure Redis Cache so duplicate uploads do not need to be reprocessed.  
In case of an Azure data center outage, metadata loss must be kept to a minimum.  
You need to configure the Azure Redis cache instance.  
Which two actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Configure Azure Redis with AOF persistence.
2.  B. Configure Azure Redis with RDB persistence.
3.  C. Configure second storage account for persistence.
4.  D. Set backup frequency to the minimum value.

:::tip Answer
B & D
:::

## Question \#227

**You are developing an Azure-based web application. The application goes offline periodically to perform offline data processing. While the application is offline, numerous Azure Monitor alerts fire which result in the on-call developer being paged.**  
**The application must always log when the application is offline for any reason.  
You need to ensure that the on-call developer is not paged during offline processing.  
What should you do?**

1.  A. Add Azure Monitor alert processing rules to suppress notifications.
2.  B. Disable Azure Monitor Service Health Alerts during offline processing.
3.  C. Create an Azure Monitor Metric Alert.
4.  D. Build an Azure Monitor action group that suppresses the alerts.

:::tip Answer
D
:::

## Question \#228

**You are developing an online game that includes a feature that allows players to interact with other players on the same team within a certain distance. The calculation to determine the players in range occurs when players move and are cached in an Azure Cache for Redis instance.  
The system should prioritize players based on how recently they have moved and should not prioritize players who have logged out of the game.  
You need to select an eviction policy.  
Which eviction policy should you use?**

1.  A. allkeys-Iru
2.  B. volatile-Iru
3.  C. allkeys-lfu
4.  D. volatile-ttl

:::tip Answer
A
:::

## Question \#229

**You develop an Azure App Service web app and deploy to a production environment. You enable Application Insights for the web app.  
The web app is throwing multiple exceptions in the environment.  
You need to examine the state of the source code and variables when the exceptions are thrown.  
Which Application Insights feature should you configure?**

1.  A. Smart detection
2.  B. Profiler
3.  C. Snapshot Debugger
4.  D. Standard test

:::tip Answer
C
:::

## Question \#230

**DRAG DROP  
\-  
You develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.  
The telemetry data must be enriched and processed before it is sent to the Application Insights service.  
You need to modify the telemetry data.  
Which Application Insights SDK features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.**  
  
![](https://img.examtopics.com/az-204/image410.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image411.png)
:::

## Question \#231

**HOTSPOT -  
You develop new functionality in a web application for a company that provides access to seismic data from around the world. The seismic data is stored in Redis Streams within an Azure Cache for Redis instance.  
The new functionality includes a real-time display of seismic events as they occur.**  
**You need to implement the Azure Cache for Redis command to receive seismic data.    
How should you complete the command? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**  

![](https://img.examtopics.com/az-204/image412.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image413.png)
:::

## Question \#232

**You develop an ASP.NET Core app that uses Azure App Configuration. You also create an App Configuration containing 100 settings.  
The app must meet the following requirements:  
• Ensure the consistency of all configuration data when changes to individual settings occur.  
• Handle configuration data changes dynamically without causing the application to restart.  
• Reduce the overall number of requests made to App Configuration APIs.  
You must implement dynamic configuration updates in the app.  
What are two ways to achieve this goal? Each correct answer presents part of the solution.   
NOTE: Each correct selection is worth one point.**

1.  A. Create and register a sentinel key in the App Configuration store. Set the refreshAll parameter of the Register method to true.
2.  B. Increase the App Configuration cache expiration from the default value.
3.  C. Decrease the App Configuration cache expiration from the default value.
4.  D. Create and configure Azure Key Vault. Implement the Azure Key Vault configuration provider.
5.  E. Register all keys in the App Configuration store. Set the refreshAll parameter of the Register method to false.
6.  F. Create and implement environment variables for each App Configuration store setting.

:::tip Answer
A & B
:::

## Question \#233

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Service Bus. Configure a topic to receive the device data by using a correlation filter.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A 
:::

## Question \#234

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Event Grid. Configure event filtering to evaluate the device identifier.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question \#235

**DRAG DROP -  
You manage several existing Logic Apps.  
You need to change definitions, add new logic, and optimize these apps on a regular basis.  
What should you use? To answer, drag the appropriate tools to the correct functionalities. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0054900001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0054900002.jpg)
:::
## Question \#236

**A company is developing a solution that allows smart refrigerators to send temperature information to a central location.  
The solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.  
You need to complete the configuration.  
Which Azure CLI or PowerShell command should you run?**  
A.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055000001.png)
B.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055000002.png)
  
C.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055000003.png)

D.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055100001.png)

:::tip Answer
 A
:::

## Question \#237

**HOTSPOT -  
You are developing an application that uses Azure Storage Queues.  
You have the following code:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0055200001.jpg)  
**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0055200002.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0055300001.jpg)
:::

## Question \#238

**A company is developing a solution that allows smart refrigerators to send temperature information to a central location.  
The solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.  
You need to complete the configuration.  
Which Azure CLI or PowerShell command should you run?**  
A.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055400001.png)

B.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055400002.png)

C.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055400003.png)

D.  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055400004.png)

:::tip Answer
C
:::

## Question \#239

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.  
You have the following requirements:  
✑ Queue size must not grow larger than 80 gigabytes (GB).  
✑ Use first-in-first-out (FIFO) ordering of messages.  
✑ Minimize Azure costs.**  
**You need to implement the messaging solution.  
Solution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure Function App that uses an Azure Storage  
Queue trigger.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question \#240

**DRAG DROP -  
You develop software solutions for a mobile delivery service. You are developing a mobile app that users can use to order from a restaurant in their area. The app uses the following workflow:  
1\. A driver selects the restaurants for which they will deliver orders.  
2\. Orders are sent to all available drivers in an area.  
3\. Only orders for the selected restaurants will appear for the driver.  
4\. The first driver to accept an order removes it from the list of available orders.  
You need to implement an Azure Service Bus solution.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.**  
**Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0055600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0055700001.png)
:::

## Question \#241

**HOTSPOT -  
You develop a news and blog content app for Windows devices.  
A notification must arrive on a user's device when there is a new article available for them to view.  
You need to implement push notifications.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  
![](https://www.examtopics.com/assets/media/exam-media/04273/0055900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0056000001.png)
:::

## Question \#242

**You are developing an Azure messaging solution.  
You need to ensure that the solution meets the following requirements:  
✑ Provide transactional support.  
✑ Provide duplicate detection.  
✑ Store the messages for an unlimited period of time.  
Which two technologies will meet the requirements? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Azure Service Bus Topic
2.  B. Azure Service Bus Queue
3.  C. Azure Storage Queue
4.  D. Azure Event Hub

:::tip Answer
A & B
:::

## Question \#243

**DRAG DROP -  
You develop a gateway solution for a public facing news API.  
The news API back end is implemented as a RESTful service and hosted in an Azure App Service instance.  
You need to configure back-end authentication for the API Management service instance.  
Which target and gateway credential type should you use? To answer, drag the appropriate values to the correct parameters. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0056200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0056200001.jpg)
:::

## Question \#244

**HOTSPOT -  
You are creating an app that uses Event Grid to connect with other services. Your app's event data will be sent to a serverless function that checks compliance.  
This function is maintained by your company.  
You write a new event subscription at the scope of your resource. The event must be invalidated after a specific period of time.  
You need to configure Event Grid.  
What should you do? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0056200001.jpg)

:::tip Answer
 ![](https://www.examtopics.com/assets/media/exam-media/04273/0056300001.jpg)
:::

## Question \#245

**HOTSPOT -  
You are working for Contoso, Ltd.  
You define an API Policy object by using the following XML markup:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0056600001.png)

**For each of the following statements, select Yes if the statement is true. Otherwise, select No.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0056600002.png)

:::tip Answer

![](https://www.examtopics.com/assets/media/exam-media/04273/0056700001.png)edia/exam-media/04273/0056600002.png)

:::

## Question \#246

**You are developing a solution that will use Azure messaging services.  
You need to ensure that the solution uses a publish-subscribe model and eliminates the need for constant polling.  
What are two possible ways to achieve the goal? Each correct answer presents a complete solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Service Bus
2.  B. Event Hub
3.  C. Event Grid
4.  D. Queue

:::tip Answer
A & C
:::

## Question \#247

**A company is implementing a publish-subscribe (Pub/Sub) messaging component by using Azure Service Bus. You are developing the first subscription application.  
In the Azure portal you see that messages are being sent to the subscription for each topic. You create and initialize a subscription client object by supplying the correct details, but the subscription application is still not consuming the messages.  
You need to ensure that the subscription client processes all messages.  
Which code segment should you use?**

1.  A. await subscriptionClient.AddRuleAsync(new RuleDescription(RuleDescription.DefaultRuleName, new TrueFilter()));
2.  B. subscriptionClient = new SubscriptionClient(ServiceBusConnectionString, TopicName, SubscriptionName);
3.  C. await subscriptionClient.CloseAsync();
4.  D. subscriptionClient.RegisterMessageHandler(ProcessMessagesAsync, messageHandlerOptions);

:::tip Answer

D

:::

## Question \#248

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.  
You have the following requirements:  
✑ Queue size must not grow larger than 80 gigabytes (GB).  
✑ Use first-in-first-out (FIFO) ordering of messages.  
✑ Minimize Azure costs.  
You need to implement the messaging solution.  
Solution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure VM that is triggered from Azure Storage  
Queue events.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer

B

:::

## Question \#249

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.  
You have the following requirements:  
✑ Queue size must not grow larger than 80 gigabytes (GB).  
✑ Use first-in-first-out (FIFO) ordering of messages.  
✑ Minimize Azure costs.  
You need to implement the messaging solution.  
Solution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Windows VM that is triggered from  
Azure Service Bus Queue.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question \#250

**DRAG DROP -  
You are developing a REST web service. Customers will access the service by using an Azure API Management instance.  
The web service does not correctly handle conflicts. Instead of returning an HTTP status code of 409, the service returns a status code of 500. The body of the status message contains only the word conflict.  
You need to ensure that conflicts produce the correct response.  
How should you complete the policy? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0057100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0057200001.png)
:::

## Question \#251

**DRAG DROP -  
You are a developer for a Software as a Service (SaaS) company. You develop solutions that provide the ability to send notifications by using Azure Notification  
Hubs.  
You need to create sample code that customers can use as a reference for how to send raw notifications to Windows Push Notification Services (WNS) devices.  
The sample code must not use external packages.  
How should you complete the code segment? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0057300001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0057400001.jpg)
:::

## Question \#252

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce  
2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Event Hub. Configure the machine identifier as the partition key and enable capture.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A
:::

## Question \#253

**DRAG DROP -  
You are developing an Azure solution to collect inventory data from thousands of stores located around the world. Each store location will send the inventory data hourly to an Azure Blob storage account for processing.  
The solution must meet the following requirements:  
✑ Begin processing when data is saved to Azure Blob storage.  
✑ Filter data based on store location information.  
✑ Trigger an Azure Logic App to process the data for output to Azure Cosmos DB.  
✑ Enable high availability and geographic distribution.  
✑ Allow 24-hours for retries.  
✑ Implement an exponential back off data processing.  
You need to configure the solution.  
What should you implement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0057600007.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0057700001.png)
:::

## Question \#254

**You are creating an app that will use CosmosDB for data storage. The app will process batches of relational data.  
You need to select an API for the app.  
Which API should you use?**

1.  A. MongoDB API
2.  B. Table API
3.  C. SQL API
4.  D. Cassandra API

:::tip Answer
C
:::

## Question \#255

**HOTSPOT -  
You are developing a .NET application that communicates with Azure Storage.  
A message must be stored when the application initializes.  
You need to implement the message.  
How should you complete the code segment? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**  
**Hot Area:**  
![](https://www.examtopics.com/assets/media/exam-media/04273/0058000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0058100001.png)
:::

## Question \#256

**HOTSPOT -  
A software as a service (SaaS) company provides document management services. The company has a service that consists of several Azure web apps. All  
Azure web apps run in an Azure App Service Plan named PrimaryASP.  
You are developing a new web service by using a web app named ExcelParser. The web app contains a third-party library for processing Microsoft Excel files.  
The license for the third-party library stipulates that you can only run a single instance of the library.  
You need to configure the service.  
How should you complete the script? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.**  
**Hot Area:**  
![](https://www.examtopics.com/assets/media/exam-media/04273/0058300001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0058400001.png)
:::

## Question \#257

**DRAG DROP -  
You have an application that provides weather forecasting data to external partners. You use Azure API Management to publish APIs.  
You must change the behavior of the API to meet the following requirements:  
✑ Support alternative input parameters  
✑ Remove formatting text from responses  
✑ Provide additional context to back-end services  
Which types of policies should you implement? To answer, drag the policy types to the correct requirements. Each policy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0058500004.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0058600001.jpg)
:::

## Question \#258

**You are developing an e-commerce solution that uses a microservice architecture.  
You need to design a communication backplane for communicating transactional messages between various parts of the solution. Messages must be communicated in first-in-first-out (FIFO) order.  
What should you use?**

1.  A. Azure Storage Queue
2.  B. Azure Event Hub
3.  C. Azure Service Bus
4.  D. Azure Event Grid

:::tip Answer
A
:::

## Question \#259

**DRAG DROP -  
A company backs up all manufacturing data to Azure Blob Storage. Admins move blobs from hot storage to archive tier storage every month.  
You must automatically move blobs to Archive tier after they have not been modified within 180 days. The path for any item that is not archived must be placed in an existing queue. This operation must be performed automatically once a month. You set the value of TierAgeInDays to -180.  
How should you configure the Logic App? To answer, drag the appropriate triggers or action blocks to the correct trigger or action slots. Each trigger or action block may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0058800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0058900001.jpg)

Box 1: Reoccurance..
To regularly run tasks, processes, or jobs on specific schedule, you can start your logic app workflow with the built-in Recurrence - Schedule trigger. You can set a date and time as well as a time zone for starting the workflow and a recurrence for repeating that workflow.

Set the interval and frequency for the recurrence. In this example, set these properties to run your workflow every week.

![](https://www.examtopics.com/assets/media/exam-media/04273/0059000001.jpg)
:::

## Question \#260

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.  
You have the following requirements:  
✑ Queue size must not grow larger than 80 gigabytes (GB).  
✑ Use first-in-first-out (FIFO) ordering of messages.  
✑ Minimize Azure costs.  
You need to implement the messaging solution.  
Solution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Function App that uses an Azure  
Service Bus Queue trigger.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
A
:::

## Question \#261

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.  
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.  
You need to implement a solution to receive the device data.  
Solution: Provision an Azure Notification Hub. Register all devices with the hub.  
Does the solution meet the goal?**

1.  A. Yes
2.  B. No

:::tip Answer
B
:::

## Question \#262

**You are building a loyalty program for a major snack producer. When customers buy a snack at any of 100 participating retailers the event is recorded in Azure  
Event Hub. Each retailer is given a unique identifier that is used as the primary identifier for the loyalty program.  
Retailers must be able to be added or removed at any time. Retailers must only be able to record sales for themselves.  
You need to ensure that retailers can record sales.  
What should you do?**

1.  A. Use publisher policies for retailers.
2.  B. Create a partition for each retailer.
3.  C. Define a namespace for each retailer.

:::tip Answer
A
:::

## Question \#263

**DRAG DROP -  
You develop and deploy a web app to Azure App Service in a production environment. You scale out the web app to four instances and configure a staging slot to support changes.  
You must monitor the web app in the environment to include the following requirements:  
✑ Increase web app availability by re-routing requests away from instances with error status codes and automatically replace instances if they remain in an error state after one hour.  
✑ Send web server logs, application logs, standard output, and standard error messaging to an Azure Storage blob account.  
You need to configure Azure App Service.  
Which values should you use? To answer, drag the appropriate configuration value to the correct requirements. Each configuration value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0059400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0059400002.jpg)

:::

## Question \#264

**You develop a solution that uses Azure Virtual Machines (VMs).  
The VMs contain code that must access resources in an Azure resource group. You grant the VM access to the resource group in Resource Manager.  
You need to obtain an access token that uses the VM's system-assigned managed identity.  
Which two actions should you perform? Each correct answer presents part of the solution.**

1.  A. From the code on the VM, call Azure Resource Manager using an access token.
2.  B. Use PowerShell on a remote machine to make a request to the local managed identity for Azure resources endpoint.
3.  C. Use PowerShell on the VM to make a request to the local managed identity for Azure resources endpoint.
4.  D. From the code on the VM, call Azure Resource Manager using a SAS token.
5.  E. From the code on the VM, generate a user delegation SAS token.

:::tip Answer
B & D
:::

## Question \#265

**You are developing a road tollway tracking application that sends tracking events by using Azure Event Hubs using premium tier.  
Each road must have a throttling policy uniquely assigned.  
You need to configure the event hub to allow for per-road throttling.  
What should you do?**

1.  A. Use a unique consumer group for each road.
2.  B. Ensure each road stores events in a different partition.
3.  C. Ensure each road has a unique connection string.
4.  D. Use a unique application group for each road.

:::tip Answer
B
:::

## Question \#266

**You develop and deploy an ASP.NET Core application that connects to an Azure Database for MySQL instance.  
Connections to the database appear to drop intermittently and the application code does not handle the connection failure.  
You need to handle the transient connection errors in code by implementing retries.  
What are three possible ways to achieve this goal? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1.  A. Close the database connection and immediately report an error.
2.  B. Disable connection pooling and configure a second Azure Database for MySQL instance.
3.  C. Wait five seconds before repeating the connection attempt to the database.
4.  D. Set a maximum number of connection attempts to 10 and report an error on subsequent connections.
5.  E. Increase connection repeat attempts exponentially up to 120 seconds.

:::tip Answer
A, C & D
:::

## Question \#267

**You are building a B2B web application that uses Azure B2B collaboration for authentication. Paying customers authenticate to Azure B2B using federation.  
The application allows users to sign up for trial accounts using any email address.  
When a user converts to a paying customer, the data associated with the trial should be kept, but the user must authenticate using federation.  
You need to update the user in Azure Active Directory (Azure AD) when they convert to a paying customer.  
Which Graph API parameter is used to change authentication from one-time passcodes to federation?**

1.  A. resetRedemption
2.  B. Status
3.  C. userFlowType
4.  D. invitedUser

:::tip Answer
B
:::

## Question \#268

**HOTSPOT-  
You develop an image upload service that is exposed using Azure API Management. Images are analyzed after upload for automatic tagging.  
Images over 500 KB are processed by a different backend that offers a lower tier of service that costs less money. The lower tier of service is denoted by a header named x-large-request. Images over 500 KB must never be processed by backends for smaller images and must always be charged the lower price.  
You need to implement API Management policies to ensure that images are processed correctly.  
How should you complete the API Management inbound policy? To answer, select the appropriate options in the answer area.**  
**NOTE: Each correct selection is worth one point.**

![](https://img.examtopics.com/az-204/image414.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image415.png)
:::

## Question \#269

**HOTSPOT-  
You develop several Azure Functions app functions to process JSON documents from a third-party system. The third-party system publishes events to Azure Event Grid to include hundreds of event types, such as billing, inventory, and shipping updates.  
Events must be sent to a single endpoint for the Azure Functions app to process. The events must be filtered by event type before processing. You must have authorization and authentication control to partition your tenants to receive the event data.  
You need to configure Azure Event Grid.  
Which configuration should you use? To answer, select the appropriate values in the answer area.  
NOTE: Each correct selection is worth one point.**  
  
![](https://img.examtopics.com/az-204/image416.png)

:::tip Answer
![](https://img.examtopics.com/az-204/image417.png)
:::

## Question \#270

**A company is developing a solution that allows smart refrigerators to send temperature information to a central location.  
The solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.  
You need to complete the configuration.  
Which Azure CLI or PowerShell command should you run?**

-   A. ![](https://img.examtopics.com/az-204/image418.png)

-   B. ![](https://img.examtopics.com/az-204/image419.png)
-   C. ![](https://img.examtopics.com/az-204/image420.png)

-   D. ![](https://img.examtopics.com/az-204/image421.png)

:::tip Answer
B
:::

## Question \#271

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
Background -  
Wide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.  
Current environment -  
Windows Server 2016 virtual machine  
This virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:  
Ocean Transport \`" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.  
Inland Transport \`" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.  
The VM supports the following REST API calls:  
Container API \`" This API provides container information including weight, contents, and other attributes.  
Location API \`" This API provides location information regarding shipping ports of call and trucking stops.  
Shipping REST API \`" This API provides shipping information for use and display on the shipping website.  
Shipping Data -  
The application uses MongoDB JSON document storage database for all container and transport information.  
Shipping Web Site -  
The site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/  
Proposed solution -  
The on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:**  

![](https://www.examtopics.com/assets/media/exam-media/04273/0004000001.jpg)

**Requirements -  
Shipping Logic app -  
The Shipping Logic app must meet the following requirements:  
Support the ocean transport and inland transport workflows by using a Logic App.  
Support industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.  
Secure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.  
Maintain on-premises connectivity to support legacy applications and final BizTalk migrations.  
Shipping Function app -  
Implement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).  
REST APIs -  
The REST API's that support the solution must meet the following requirements:  
Secure resources to the corporate VNet.  
Allow deployment to a testing location within Azure while not incurring additional costs.  
Automatically scale to double capacity during peak shipping times while not causing application downtime.  
Minimize costs when selecting an Azure payment model.  
Shipping data -  
Data migration from on-premises to Azure must minimize costs and downtime.  
Shipping website -  
Use Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.  
Issues -**
  
**Windows Server 2016 VM -  
The VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.  
Shipping website and REST APIs -  
The following error message displays while you are testing the website:  
Failed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.**

**Question**

**HOTSPOT -  
You need to configure Azure CDN for the Shipping web site.  
Which configuration options should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:** 

![](https://www.examtopics.com/assets/media/exam-media/04273/0004200001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04273/0004300001.jpg)
:::

## Question \#272

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
Background -  
Wide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.  
Current environment -  
Windows Server 2016 virtual machine  
This virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:  
Ocean Transport \`" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.  
Inland Transport \`" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.  
The VM supports the following REST API calls:  
Container API \`" This API provides container information including weight, contents, and other attributes.  
Location API \`" This API provides location information regarding shipping ports of call and trucking stops.  
Shipping REST API \`" This API provides shipping information for use and display on the shipping website.  
Shipping Data -  
The application uses MongoDB JSON document storage database for all container and transport information.  
Shipping Web Site -  
The site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/  
Proposed solution -  
The on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:**

![](https://www.examtopics.com/assets/media/exam-media/04273/0004000001.jpg)  

**Requirements -  
Shipping Logic app -  
The Shipping Logic app must meet the following requirements:  
Support the ocean transport and inland transport workflows by using a Logic App.  
Support industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.  
Secure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.  
Maintain on-premises connectivity to support legacy applications and final BizTalk migrations.  
Shipping Function app -  
Implement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).  
REST APIs -  
The REST API's that support the solution must meet the following requirements:  
Secure resources to the corporate VNet.  
Allow deployment to a testing location within Azure while not incurring additional costs.  
Automatically scale to double capacity during peak shipping times while not causing application downtime.  
Minimize costs when selecting an Azure payment model.  
Shipping data -  
Data migration from on-premises to Azure must minimize costs and downtime.  
Shipping website -  
Use Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.  
Issues -  
Windows Server 2016 VM -  
The VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.  
Shipping website and REST APIs -  
The following error message displays while you are testing the website:  
Failed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.QuestionHOTSPOT -  
You need to correct the VM issues.  
Which tools should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](media/98790b6fce115a75d22bd7e55aa70131.jpeg)

**Correct Answer:** *![](media/8197e6453c2411659999e93ce59dab02.jpeg)*

## Question \#273

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
Background -  
You are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web  
API project that is deployed as an Azure Web App.  
Overall architecture -  
Employees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.  
Receipt processing -  
Employees may upload receipts in two ways:  
Uploading using an Azure Files mounted folder  
Uploading using the web application  
Data Storage -  
Receipt and employee information is stored in an Azure SQL database.  
Documentation -  
Employees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for  
Azure File upload, and instructions on how to configure the mounted folder.  
Solution details -  
Users table -  
![](media/72cee77de572da51bf2346d9aa622016.png)  
Web Application -  
You enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.  
Processing -  
Processing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob  
Storage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.  
Logging -  
Azure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.  
Application Insights must always contain all log messages.  
Requirements -  
Receipt processing -  
Concurrent processing of a receipt must be prevented.  
Disaster recovery -  
Regional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.  
Security -  
User's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.  
All certificates and secrets used to secure data must be stored in Azure Key Vault.  
You must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.  
All access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).  
Receipt data must always be encrypted at rest.  
All data must be protected in transit.  
User's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.  
In the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.  
Issues -  
Upload format issue -  
Employees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File  
Share, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal  
Server error page.  
Capacity issue -  
During busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.  
Log capacity issue -  
Developers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.  
Application code -  
Processing.cs -  
![](media/f4678626bc8ac6680adafa9759d7c7d7.jpeg)  
Database.cs -  
![](media/a036d518b1be25b150ffc8fa8c9b5f45.jpeg)  
ReceiptUploader.cs -  
![](media/a8ffa08dd32e6ef3907c75374d15744e.jpeg)  
ConfigureSSE.ps1 -  
![](media/eabdc914002ecdc7e096322b795a8a3a.jpeg)QuestionDRAG DROP -  
You need to add code at line PC32 in Processing.cs to implement the GetCredentials method in the Processing class.  
How should you complete the code? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:  
![](media/8d73bb4fb921dcf76fa3d929eac99c2c.jpeg)**

**Correct Answer:** *![](media/2c5612546ed74ea3ff5eacecb7c503a5.jpeg)*

## Question \#274

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
Background -  
You are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web  
API project that is deployed as an Azure Web App.  
Overall architecture -  
Employees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.  
Receipt processing -  
Employees may upload receipts in two ways:  
Uploading using an Azure Files mounted folder  
Uploading using the web application  
Data Storage -  
Receipt and employee information is stored in an Azure SQL database.  
Documentation -  
Employees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for  
Azure File upload, and instructions on how to configure the mounted folder.  
Solution details -  
Users table -  
![](media/72cee77de572da51bf2346d9aa622016.png)  
  
Web Application -  
You enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.  
Processing -  
Processing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob  
Storage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.  
Logging -  
Azure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.  
Application Insights must always contain all log messages.  
Requirements -  
Receipt processing -  
Concurrent processing of a receipt must be prevented.  
Disaster recovery -  
Regional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.  
Security -  
User's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.  
All certificates and secrets used to secure data must be stored in Azure Key Vault.  
You must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.  
All access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).  
Receipt data must always be encrypted at rest.  
All data must be protected in transit.  
User's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.  
In the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.  
Issues -  
Upload format issue -  
Employees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File  
Share, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal  
Server error page.  
Capacity issue -  
During busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.  
Log capacity issue -  
Developers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.  
  
Application code -  
Processing.cs -  
![](media/f4678626bc8ac6680adafa9759d7c7d7.jpeg)  
Database.cs -  
![](media/a036d518b1be25b150ffc8fa8c9b5f45.jpeg)  
ReceiptUploader.cs -  
![](media/a8ffa08dd32e6ef3907c75374d15744e.jpeg)  
  
ConfigureSSE.ps1 -  
![](media/eabdc914002ecdc7e096322b795a8a3a.jpeg)QuestionDRAG DROP -  
You need to ensure disaster recovery requirements are met.  
What code should you add at line PC16?  
To answer, drag the appropriate code fragments to the correct locations. Each code fragment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:  
![](media/e401db8bad34cc8d0ed3e820cc037e02.jpeg)**

**Correct Answer:** *![](media/b603c56388ece26523b13b9674ff1b78.jpeg)*

## Question \#275

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
LabelMaker app -  
Coho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.  
Coho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.  
External partners send data to the LabelMaker application to include artwork and text for custom label designs.  
  
Requirements. Data -  
You identify the following requirements for data management and manipulation:  
Order data is stored as nonrelational JSON and must be queried using SQL.  
Changes to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.  
Requirements. Security -  
You have the following security requirements:  
Users of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.  
![](media/dcc405400d958ddc5adcd5007fab14ef.png)  
External partners must use their own credentials and authenticate with their organization's identity management solution.  
External partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.  
Storage of e-commerce application settings must be maintained in Azure Key Vault.  
E-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).  
Conditional access policies must be applied at the application level to protect company content.  
The LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.  
Requirements. LabelMaker app -  
Azure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure  
Kubernetes Service (AKS).  
You must use Azure Container Registry to publish images that support the AKS deployment.  
Architecture -  
![](media/d828d37795f8cfc2299b3744ab5f6591.jpeg)  
  
Issues -  
Calls to the Printer API App fail periodically due to printer communication timeouts.  
Printer communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.  
The order workflow fails to run upon initial deployment to Azure.  
Order.json -  
Relevant portions of the app files are shown below. Line numbers are included for reference only.  
This JSON file contains a representation of the data for an order that includes a single item.  
Order.json -  
![](media/5e4ad763068c4257795e7ec0b7213bc5.png)QuestionHOTSPOT -  
You need to configure Azure Cosmos DB.  
Which settings should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:  
![](media/f17193bd23ca59d54aaf39fd2342b81a.jpeg)**

**Correct Answer:** *![](media/3fd6cd502951d820502c6254bb8e976c.jpeg)*

## Question \#276

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
LabelMaker app -  
Coho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.  
Coho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.  
External partners send data to the LabelMaker application to include artwork and text for custom label designs.  
Requirements. Data -  
You identify the following requirements for data management and manipulation:  
Order data is stored as nonrelational JSON and must be queried using SQL.  
Changes to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.  
Requirements. Security -  
You have the following security requirements:  
Users of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.  
![](media/dcc405400d958ddc5adcd5007fab14ef.png)  
External partners must use their own credentials and authenticate with their organization's identity management solution.  
External partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.  
Storage of e-commerce application settings must be maintained in Azure Key Vault.  
E-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).  
Conditional access policies must be applied at the application level to protect company content.  
The LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.  
Requirements. LabelMaker app -  
Azure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure  
Kubernetes Service (AKS).  
You must use Azure Container Registry to publish images that support the AKS deployment.  
Architecture -  
![](media/d828d37795f8cfc2299b3744ab5f6591.jpeg)  
  
Issues -  
Calls to the Printer API App fail periodically due to printer communication timeouts.  
Printer communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.  
The order workflow fails to run upon initial deployment to Azure.  
Order.json -  
Relevant portions of the app files are shown below. Line numbers are included for reference only.  
This JSON file contains a representation of the data for an order that includes a single item.  
Order.json -  
![](media/5e4ad763068c4257795e7ec0b7213bc5.png)QuestionHOTSPOT -  
You need to retrieve all order line items from Order.json and sort the data alphabetically by the city.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:  
![](media/7aa02841e77793535124fa78f0a45147.jpeg)**

**Correct Answer:** *![](media/76a85e69a1001bbf47292fde787bbeec.jpeg)*

## Question \#277

**Introductory InfoCase study -  
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.  
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.  
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.  
To start the case study -  
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.  
Background -  
VanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.  
Current environment -  
Corporate website -  
The company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.  
Retail Store Locations -  
The company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.  
Requirements -  
The application components must meet the following requirements:  
Corporate website -  
Secure the website by using SSL.  
Minimize costs for data storage and hosting.  
Implement native GitHub workflows for continuous integration and continuous deployment (CI/CD).  
Distribute the website content globally for local use.  
Implement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.  
The website must have 99.95 percent uptime.  
Retail store locations -  
Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.  
Audit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.  
Delivery services -  
Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.  
Store delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.  
Inventory services -  
The company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.  
Security -  
All Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.  
Authentication and authorization must use Azure AD and services must use managed identities where possible.  
Issues -  
Retail Store Locations -  
You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.  
Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.QuestionHOTSPOT -  
You need to implement the Azure Function for delivery driver profile information.  
Which configurations should you use? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:  
![](media/c61692eb1453ba6ed8f2fc7edd55d812.jpeg)**

**Correct Answer:** *![](media/f8864b4e9834e9fbc9a5076f1bf0fe89.jpeg)*
