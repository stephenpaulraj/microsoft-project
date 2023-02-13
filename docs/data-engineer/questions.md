---
sidebar_position: 2
---

# Question Bank

**Use search bar for quick access to Q & A.**

## Question #1
**You have a table in an Azure Synapse Analytics dedicated SQL pool. The table was created by using the following Transact-SQL statement.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001600001.png)

**You need to alter the table to meet the following requirements:  
✑ Ensure that users can identify the current manager of employees.  
✑ Support creating an employee reporting hierarchy for your entire company.  
✑ Provide fast lookup of the managers' attributes such as name and job title.  
Which column should you add to the table?**

1. A. [ManagerEmployeeID] [smallint] NULL
2. B. [ManagerEmployeeKey] [smallint] NULL
3. C. [ManagerEmployeeKey] [int] NULL
4. D. [ManagerName] [varchar](200) NULL

:::tip Answer
C
:::

## Question #2
**You have an Azure Synapse workspace named MyWorkspace that contains an Apache Spark database named mytestdb.
You run the following command in an Azure Synapse Analytics Spark pool in MyWorkspace.  
CREATE TABLE mytestdb.myParquetTable(
EmployeeID int,
EmployeeName string,
EmployeeStartDate date)  
USING Parquet -   
You then use Spark to insert a row into mytestdb.myParquetTable. The row contains the following data.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001700001.png)

**One minute later, you execute the following query from a serverless SQL pool in MyWorkspace.   
SELECT EmployeeID -   
FROM mytestdb.dbo.myParquetTable  
WHERE EmployeeName = 'Alice';  
What will be returned by the query?**  
1. A. 24  
2. B. an error  
3. C. a null value

:::tip Answer
A
:::

## Question #3
**DRAG DROP -  
You have a table named SalesFact in an enterprise data warehouse in Azure Synapse Analytics. SalesFact contains sales data from the past 36 months and has the following characteristics:  
✑ Is partitioned by month  
✑ Contains one billion rows   
✑ Has clustered columnstore index  
At the beginning of each month, you need to remove data from SalesFact that is older than 36 months as quickly as possible.  
Which three actions should you perform in sequence in a stored procedure? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0001900001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0001900002.png)
:::

## Question #4
**You have files and folders in Azure Data Lake Storage Gen2 for an Azure Synapse workspace as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002000001.png)

**You create an external table named ExtTable that has LOCATION='/topfolder/'.  
When you query ExtTable by using an Azure Synapse Analytics serverless SQL pool, which files are returned?**

1. A. File2.csv and File3.csv only  
2. B. File1.csv and File4.csv only  
3. C. File1.csv, File2.csv, File3.csv, and File4.csv  
4. D. File1.csv only

:::tip Answer
C
:::

## Question #5
**HOTSPOT -  
You are planning the deployment of Azure Data Lake Storage Gen2.  
You have the following two reports that will access the data lake:  
✑ Report1: Reads three columns from a file that contains 50 columns.  
✑ Report2: Queries a single record based on a timestamp.  
You need to recommend in which format to store the data in the data lake to support the reports. The solution must minimize read times.  
What should you recommend for each report? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002200001.png)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0002300001.png)  
:::

## Question #6
**You are designing the folder structure for an Azure Data Lake Storage Gen2 container.
Users will query data by using a variety of services including Azure Databricks and Azure Synapse Analytics serverless SQL pools. The data will be secured by subject area. Most queries will include data from the current year or current month.
Which folder structure should you recommend to support fast queries and simplified folder security?**  
1. A. /{SubjectArea}/{DataSource}/{DD}/{MM}/{YYYY}/{FileData}_{YYYY}_{MM}_{DD}.csv  
2. B. /{DD}/{MM}/{YYYY}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv  
3. C. /{YYYY}/{MM}/{DD}/{SubjectArea}/{DataSource}/{FileData}_{YYYY}_{MM}_{DD}.csv  
4. D. /{SubjectArea}/{DataSource}/{YYYY}/{MM}/{DD}/{FileData}_{YYYY}_{MM}_{DD}.csv 

:::tip Answer
D
:::

## Question #7
**HOTSPOT -  
You need to output files from Azure Data Factory.  
Which file format should you use for each type of output? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0002600001.png)  
:::

## Question #8
**HOTSPOT -  
You use Azure Data Factory to prepare data to be queried by Azure Synapse Analytics serverless SQL pools.  
Files are initially ingested into an Azure Data Lake Storage Gen2 account as 10 small JSON files. Each file contains the same data attributes and data from a subsidiary of your company.  
You need to move the files to a different folder and transform the data to meet the following requirements:  
✑ Provide the fastest possible query times.  
✑ Automatically infer the schema from the underlying files.  
How should you configure the Data Factory copy activity? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0002800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0002900001.png)  
:::

## Question #9
**HOTSPOT -  
You have a data model that you plan to implement in a data warehouse in Azure Synapse Analytics as shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0003000001.png)

**All the dimension tables will be less than 2 GB after compression, and the fact table will be approximately 6 TB. The dimension tables will be relatively static with very few data inserts and updates.  
Which type of table should you use for each table? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0003100001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003300001.png)  
:::

## Question #10
**HOTSPOT -
You have an Azure Data Lake Storage Gen2 container.  
Data is ingested into the container, and then transformed by a data integration application. The data is NOT modified after that. Users can read files in the container but cannot modify the files.  
You need to design a data archiving solution that meets the following requirements:  
✑ New data is accessed frequently and must be available as quickly as possible.  
✑ Data that is older than five years is accessed infrequently but must be available within one second when requested.  
✑ Data that is older than seven years is NOT accessed. After seven years, the data must be persisted at the lowest cost possible.  
✑ Costs must be minimized while maintaining the required availability.  
How should you manage the data? To answer, select the appropriate options in the answer area.   
NOTE: Each correct selection is worth one point  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0003500001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003600001.png)
:::

## Question #11
**DRAG DROP -
You need to create a partitioned table in an Azure Synapse Analytics dedicated SQL pool.  
How should you complete the Transact-SQL statement? To answer, drag the appropriate values to the correct targets.   Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0003800001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0003800002.png)
:::

## Question #12
**You need to design an Azure Synapse Analytics dedicated SQL pool that meets the following requirements:   
✑ Can return an employee record from a given point in time.  
✑ Maintains the latest employee information.  
✑ Minimizes query complexity.  
How should you model the employee data?**

1. A. as a temporal table  
2. B. as a SQL graph table  
3. C. as a degenerate dimension table  
4. D. as a Type 2 slowly changing dimension (SCD) table

:::tip Answer
D
:::

## Question #13
**You have an enterprise-wide Azure Data Lake Storage Gen2 account. The data lake is accessible only through an Azure virtual network named VNET1.  
You are building a SQL pool in Azure Synapse that will use data from the data lake.  
Your company has a sales team. All the members of the sales team are in an Azure Active Directory group named Sales.  POSIX controls are used to assign the Sales group access to the files in the data lake.   
You plan to load data to the SQL pool every hour.  
You need to ensure that the SQL pool can load the sales data from the data lake.  
Which three actions should you perform? Each correct answer presents part of the solution.  
NOTE: Each area selection is worth one point.**  

1. A. Add the managed identity to the Sales group.
2. B. Use the managed identity as the credentials for the data load process.
3. C. Create a shared access signature (SAS).
4. D. Add your Azure Active Directory (Azure AD) account to the Sales group.
5. E. Use the shared access signature (SAS) as the credentials for the data load process.
6. F. Create a managed identity.

:::tip Answer
ABF 
:::

## Question #14
**HOTSPOT -
You have an Azure Synapse Analytics dedicated SQL pool that contains the users shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004000001.png)

**User1 executes a query on the database, and the query returns the results shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004100001.jpg)

**User1 is the only user who has access to the unmasked data.
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0004200001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0004300001.png)
:::

## Question #15
**You have an enterprise data warehouse in Azure Synapse Analytics.
Using PolyBase, you create an external table named [Ext].[Items] to query Parquet files stored in Azure Data Lake Storage Gen2 without importing the data to the data warehouse.
The external table has three columns.
You discover that the Parquet files have a fourth column named ItemID.
Which command should you run to add the ItemID column to the external table?**

1. A  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004400001.png)

2. B ![](https://www.examtopics.com/assets/media/exam-media/04259/0004400002.png)

3. C  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004400003.png)

4. D  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004500001.png)


:::tip Answer
C
:::

## Question #16
**HOTSPOT -
You have two Azure Storage accounts named Storage1 and Storage2. Each account holds one container and has the hierarchical namespace enabled. The system has files that contain data stored in the Apache Parquet format.  
You need to copy folders and files from Storage1 to Storage2 by using a Data Factory copy activity. The solution must meet the following requirements:  
✑ No transformations must be performed.  
✑ The original folder structure must be retained.  
✑ Minimize time required to perform the copy activity.  
How should you configure the copy activity? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0004600001.jpg)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0004700001.jpg)  
:::

## Question #17
**You have an Azure Data Lake Storage Gen2 container that contains 100 TB of data.  
You need to ensure that the data in the container is available for read workloads in a secondary region if an outage occurs in the primary region. The solution must minimize costs.  
Which type of data redundancy should you use?**  

1. A. geo-redundant storage (GRS)  
2. B. read-access geo-redundant storage (RA-GRS)  
3. C. zone-redundant storage (ZRS)  
4. D. locally-redundant storage (LRS)

:::tip Answer
B
:::

## Question #18
**You plan to implement an Azure Data Lake Gen 2 storage account.
You need to ensure that the data lake will remain available if a data center fails in the primary Azure region. The solution must minimize costs.
Which type of replication should you use for the storage account?**

1. A. geo-redundant storage (GRS)
2. B. geo-zone-redundant storage (GZRS)
3. C. locally-redundant storage (LRS)
4. D. zone-redundant storage (ZRS)

:::tip Answer
D
:::

## Question #19
**HOTSPOT -  
You have a SQL pool in Azure Synapse.  
You plan to load data from Azure Blob storage to a staging table. Approximately 1 million rows of data will be loaded daily. The table will be truncated before each daily load.  
You need to create the staging table. The solution must minimize how long it takes to load the data to the staging table.  
How should you configure the table? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0005000001.jpg)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0005100001.jpg)  
:::    

## Question #20
**You are designing a fact table named FactPurchase in an Azure Synapse Analytics dedicated SQL pool. The table contains purchases from suppliers for a retail store. FactPurchase will contain the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005200001.png)

**FactPurchase will have 1 million rows of data added daily and will contain three years of data.  
Transact-SQL queries similar to the following query will be executed daily.  
SELECT -  
SupplierKey, StockItemKey, IsOrderFinalized, COUNT(*)  
FROM FactPurchase -  
WHERE DateKey >= 20210101 -  
AND DateKey <= 20210131 -  
GROUP By SupplierKey, StockItemKey, IsOrderFinalized  
Which table distribution will minimize query times?**

1. A. replicated
2. B. hash-distributed on PurchaseKey
3. C. round-robin
4. D. hash-distributed on IsOrderFinalized

:::tip Answer
B
:::

## Question #21
**HOTSPOT -  
From a website analytics system, you receive data extracts about user interactions such as downloads, link clicks, form submissions, and video plays.  
The data contains the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005400001.png)

**You need to design a star schema to support analytical queries of the data. The star schema will contain four tables including a date dimension.  
To which table should you add each column? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0005500001.png)

:::tip Answer  
![](https://www.examtopics.com/assets/media/exam-media/04259/0005600001.png)  
:::

## Question #22
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You convert the files to compressed delimited text files.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
A
:::

## Question #23
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You copy the files to a table that has a columnstore index.  
Does this meet the goal?**

1. A. Yes
2. B. No Most Voted

:::tip Answer
B
:::

## Question #24
**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.  
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.  
You have an Azure Storage account that contains 100 GB of files. The files contain rows of text and numerical values. 75% of the rows contain description data that has an average length of 1.1 MB.  
You plan to copy the data from the storage account to an enterprise data warehouse in Azure Synapse Analytics.  
You need to prepare the files to ensure that the data copies quickly.  
Solution: You modify the files to ensure that each row is more than 1 MB.  
Does this meet the goal?**

1. A. Yes
2. B. No

:::tip Answer
B
:::

## Question #25
**You build a data warehouse in an Azure Synapse Analytics dedicated SQL pool.  
Analysts write a complex SELECT query that contains multiple JOIN and CASE statements to transform data for use in inventory reports. The inventory reports will use the data and additional WHERE parameters depending on the report. The reports will be produced once daily.  
You need to implement a solution to make the dataset available for the reports. The solution must minimize query times.  
What should you implement?**

1. A. an ordered clustered columnstore index
2. B. a materialized view
3. C. result set caching
4. D. a replicated table

:::tip Answer
B
:::

## Question #26
**You have an Azure Synapse Analytics workspace named WS1 that contains an Apache Spark pool named Pool1.  
You plan to create a database named DB1 in Pool1.  
You need to ensure that when tables are created in DB1, the tables are available automatically as external tables to the built-in serverless SQL pool.  
Which format should you use for the tables in DB1?**

1. A. CSV
2. B. ORC
3. C. JSON
4. D. Parquet

:::tip Answer
D
:::

## Question #27
**You are planning a solution to aggregate streaming data that originates in Apache Kafka and is output to Azure Data Lake Storage Gen2. The developers who will implement the stream processing solution use Java.  
Which service should you recommend using to process the streaming data?**

1. A. Azure Event Hubs
2. B. Azure Data Factory
3. C. Azure Stream Analytics
4. D. Azure Databricks

:::tip Answer
D
:::

## Question #28
**You plan to implement an Azure Data Lake Storage Gen2 container that will contain CSV files. The size of the files will vary based on the number of events that occur per hour.
File sizes range from 4 KB to 5 GB.  
You need to ensure that the files stored in the container are optimized for batch processing.  
What should you do?**

1. A. Convert the files to JSON
2. B. Convert the files to Avro
3. C. Compress the files
4. D. Merge the files

:::tip Answer
B
:::

## Question #29
**HOTSPOT -  
You store files in an Azure Data Lake Storage Gen2 container. The container has the storage policy shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006500001.png)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006600001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0006700001.jpg)
:::

## Question #30
**You are designing a financial transactions table in an Azure Synapse Analytics dedicated SQL pool. The table will have a clustered columnstore index and will include the following columns:  
✑ TransactionType: 40 million rows per transaction type  
✑ CustomerSegment: 4 million per customer segment  
✑ TransactionMonth: 65 million rows per month  
AccountType: 500 million per account type  
You have the following query requirements:  
✑ Analysts will most commonly analyze transactions for a given month.  
✑ Transactions analysis will typically summarize transactions by transaction type, customer segment, and/or account type
You need to recommend a partition strategy for the table to minimize query times.  
On which column should you recommend partitioning the table?**

1. A. CustomerSegment
2. B. AccountType
3. C. TransactionType
4. D. TransactionMonth

:::tip Answer
D
:::

## Question #31
**HOTSPOT -  
You have an Azure Data Lake Storage Gen2 account named account1 that stores logs as shown in the following table.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0006800003.png)

**You do not expect that the logs will be accessed during the retention periods.  
You need to recommend a solution for account1 that meets the following requirements:  
✑ Automatically deletes the logs at the end of each retention period  
✑ Minimizes storage costs  
What should you include in the recommendation? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**  

![](https://www.examtopics.com/assets/media/exam-media/04259/0006900003.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0006900004.jpg)
:::

## Question #32
**You plan to ingest streaming social media data by using Azure Stream Analytics. The data will be stored in files in Azure Data Lake Storage, and then consumed by using Azure Databricks and PolyBase in Azure Synapse Analytics.  
You need to recommend a Stream Analytics data output format to ensure that the queries from Databricks and PolyBase against the files encounter the fewest possible errors. The solution must ensure that the files can be queried quickly and that the data type information is retained.  
What should you recommend?**

1. A. JSON
2. B. Parquet
3. C. CSV
4. D. Avro

:::tip Answer
B
:::

## Question #33
**You have an Azure Synapse Analytics dedicated SQL pool named Pool1. Pool1 contains a partitioned fact table named dbo.Sales and a staging table named stg.Sales that has the matching table and partition definitions.  
You need to overwrite the content of the first partition in dbo.Sales with the content of the same partition in stg.Sales. The solution must minimize load times.  
What should you do?**

1. A. Insert the data from stg.Sales into dbo.Sales.
2. B. Switch the first partition from dbo.Sales to stg.Sales.
3. C. Switch the first partition from stg.Sales to dbo.Sales.
4. D. Update dbo.Sales from stg.Sales.

:::tip Answer
B
:::

## Question #34
**You are designing a slowly changing dimension (SCD) for supplier data in an Azure Synapse Analytics dedicated SQL pool.  
You plan to keep a record of changes to the available fields.
The supplier data contains the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007200001.png)

**Which three additional columns should you add to the data to create a Type 2 SCD? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. surrogate primary key
2. B. effective start date
3. C. business key
4. D. last modified date
5. E. effective end date
6. F. foreign key

:::tip Answer
BCE 
:::

## Question #35
**HOTSPOT -  
You have a Microsoft SQL Server database that uses a third normal form schema.  
You plan to migrate the data in the database to a star schema in an Azure Synapse Analytics dedicated SQL pool.  
You need to design the dimension tables. The solution must optimize read operations.  
What should you include in the solution? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007400001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0007400002.jpg)
:::

## Question #36
**HOTSPOT -
You plan to develop a dataset named Purchases by using Azure Databricks. Purchases will contain the following columns:  
✑ ProductID  
✑ ItemPrice  
✑ LineTotal  
✑ Quantity  
✑ StoreID  
✑ Minute  
✑ Month  
✑ Hour **  

**Year -**  

✑ **Day**  

**You need to store the data to support hourly incremental load pipelines that will vary for each Store ID. The solution must minimize storage costs.  
How should you complete the code? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007600002.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0007700001.png)
:::

## Question #37
**You are designing a partition strategy for a fact table in an Azure Synapse Analytics dedicated SQL pool. The table has the following specifications:  
✑ Contain sales data for 20,000 products.  
Use hash distribution on a column named ProductID.**

**
✑ Contain 2.4 billion records for the years 2019 and 2020.  
Which number of partition ranges provides optimal compression and performance for the clustered columnstore index?**

1. A. 40
2. B. 240
3. C. 400
4. D. 2,400

:::tip Answer
A
:::

## Question #38
**HOTSPOT -  
You are creating dimensions for a data warehouse in an Azure Synapse Analytics dedicated SQL pool.  
You create a table by using the Transact-SQL statement shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0007900001.png)

**Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.   
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008000002.png)
:::

## Question #39
**You are designing a fact table named FactPurchase in an Azure Synapse Analytics dedicated SQL pool. The table contains purchases from suppliers for a retail store. FactPurchase will contain the following columns.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008200001.png)

**FactPurchase will have 1 million rows of data added daily and will contain three years of data.
Transact-SQL queries similar to the following query will be executed daily.  
SELECT -  
SupplierKey, StockItemKey, COUNT(*)  
FROM FactPurchase -  
WHERE DateKey >= 20210101 -  
AND DateKey <= 20210131 -  
GROUP By SupplierKey, StockItemKey  
Which table distribution will minimize query times?**

1. A. replicated
2. B. hash-distributed on PurchaseKey
3. C. round-robin
4. D. hash-distributed on DateKey

:::tip Answer
B
:::

## Question #40
**You are implementing a batch dataset in the Parquet format.
Data files will be produced be using Azure Data Factory and stored in Azure Data Lake Storage Gen2. The files will be consumed by an Azure Synapse Analytics serverless SQL pool.  
You need to minimize storage costs for the solution.  
What should you do?**

1. A. Use Snappy compression for the files.
2. B. Use OPENROWSET to query the Parquet files.
3. C. Create an external table that contains a subset of columns from the Parquet files.
4. D. Store all data as string in the Parquet files.

:::tip Answer
C
:::

## Question #41
**DRAG DROP -  
You need to build a solution to ensure that users can query specific files in an Azure Data Lake Storage Gen2 account from an Azure Synapse Analytics serverless SQL pool.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008400001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008500001.jpg)
:::

## Question #42
**You are designing a data mart for the human resources (HR) department at your company. The data mart will contain employee information and employee transactions.  
From a source system, you have a flat extract that has the following fields  
✑ EmployeeID**

**FirstName -**

✑ **LastName  
✑ Recipient  
✑ GrossAmount  
✑ TransactionID  
✑ GovernmentID  
✑ NetAmountPaid  
✑ TransactionDate**  
**You need to design a star schema data model in an Azure Synapse Analytics dedicated SQL pool for the data mart.
Which two tables should you create? Each correct answer presents part of the solution.  
NOTE: Each correct selection is worth one point.**

1. A. a dimension table for Transaction
2. B. a dimension table for EmployeeTransaction
3. C. a dimension table for Employee
4. D. a fact table for Employee
5. E. a fact table for Transaction

:::tip Answer
CE
:::

## Question #43
**You are designing a dimension table for a data warehouse.   The table will track the value of the dimension attributes over time and preserve the history of the data by adding new rows as the data changes.   
Which type of slowly changing dimension (SCD) should you use?**

1. A. Type 0
2. B. Type 1
3. C. Type 2
4. D. Type 3

:::tip Answer
C
:::

## Question #44
**DRAG DROP -  
You have data stored in thousands of CSV files in Azure Data Lake Storage Gen2. Each file has a header row followed by a properly formatted carriage return (/ r) and line feed (/n).
You are implementing a pattern that batch loads the files daily into a dedicated SQL pool in Azure Synapse Analytics by using PolyBase.  
You need to skip the header row when you import the files into the data warehouse. Before building the loading pattern, you need to prepare the required database objects in Azure Synapse Analytics.  
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.  
NOTE: Each correct selection is worth one point  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0008800001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0008800002.jpg)
:::

## Question #45
**HOTSPOT -  
You are building an Azure Synapse Analytics dedicated SQL pool that will contain a fact table for transactions from the first half of the year 2020.  
You need to ensure that the table meets the following requirements:  
✑ Minimizes the processing time to delete data that is older than 10 years  
✑ Minimizes the I/O for queries that use year-to-date values
How should you complete the Transact-SQL statement? To answer, select the appropriate options in the answer area.  
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009000001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009100001.jpg)
:::

## Question #46
**You are performing exploratory analysis of the bus fare data in an Azure Data Lake Storage Gen2 account by using an Azure Synapse Analytics serverless SQL pool.  
You execute the Transact-SQL query shown in the following exhibit.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009300001.jpg)

**What do the query results include?**

1. A. Only CSV files in the tripdata_2020 subfolder.
2. B. All files that have file names that beginning with "tripdata_2020".
3. C. All CSV files that have file names that contain "tripdata_2020".
4. D. Only CSV that have file names that beginning with "tripdata_2020".

:::tip Answer
D
:::

## Question #47
**DRAG DROP -  
You use PySpark in Azure Databricks to parse the following JSON input.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009400001.png)

**You need to output the data in the following tabular format.**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009400002.png)

**How should you complete the PySpark code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the spit bar between panes or scroll to view content.  
NOTE: Each correct selection is worth one point.  
Select and Place:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009500001.jpg)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009500002.jpg)
:::

## Question #48
**HOTSPOT -  
You are designing an application that will store petabytes of medical imaging data.  
When the data is first created, the data will be accessed frequently during the first week. After one month, the data must be accessible within 30 seconds, but files will be accessed infrequently. After one year, the data will be accessed infrequently but must be accessible within five minutes.  
You need to select a storage strategy for the data. The solution must minimize costs.  
Which storage tier should you use for each time frame? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.  
Hot Area:**

![](https://www.examtopics.com/assets/media/exam-media/04259/0009700001.png)

:::tip Answer
![](https://www.examtopics.com/assets/media/exam-media/04259/0009800001.png)
:::

## Question #49
**You have an Azure Synapse Analytics Apache Spark pool named Pool1.  
You plan to load JSON files from an Azure Data Lake Storage Gen2 container into the tables in Pool1. The structure and data types vary by file.  
You need to load the files into the tables. The solution must maintain the source data types.  
What should you do?**

1. A. Use a Conditional Split transformation in an Azure Synapse data flow.
2. B. Use a Get Metadata activity in Azure Data Factory.
3. C. Load the data by using the OPENROWSET Transact-SQL command in an Azure Synapse Analytics serverless SQL pool.
4. D. Load the data by using PySpark.

:::tip Answer
C
:::

## Question #50
**You have an Azure Databricks workspace named workspace1 in the Standard pricing tier. Workspace1 contains an all-purpose cluster named cluster1.  
You need to reduce the time it takes for cluster1 to start and scale up. The solution must minimize costs.  
What should you do first?**

1. A. Configure a global init script for workspace1.
2. B. Create a cluster policy in workspace1.
3. C. Upgrade workspace1 to the Premium pricing tier.
4. D. Create a pool in workspace1.

:::tip Answer
D
:::