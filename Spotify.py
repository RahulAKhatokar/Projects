#!/usr/bin/env python
# coding: utf-8

# In[210]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings


# In[196]:


warnings.simplefilter(action='ignore', category=FutureWarning)


# In[64]:


d = pd.read_csv(r"C:\Users\rahul\Downloads\listeners.csv")


# In[65]:


d


# In[66]:


d.isnull().sum()               #checking for null values


# In[68]:


d.dtypes                       #checking for data types


# In[69]:


d.duplicated().sum()           #checking for dulipcates


# In[70]:


d.columns                     #checking if theres any space/special characters in the column names


# In[71]:


d.describe()                  #descriptive Statistics


# In[72]:


d


# In[118]:


#d['Listeners'] = d['Listeners'].str.replace(',','')
d['Listeners'] = d['Listeners'].astype(int)


# In[123]:


d['Daily Trend'] = d['Daily Trend'].str.replace(',','')
d['PkListeners'] = d['PkListeners'].str.replace(',','')


# In[124]:


d['Daily Trend'] = d['Daily Trend'].astype(int)
d['PkListeners'] = d['PkListeners'].astype(int)


# In[125]:


d.dtypes


# In[127]:


d


# In[128]:


d.dtypes


# In[197]:


fig, axs = plt.subplots(1, 3, figsize=(24, 6))

sns.histplot(d['Listeners'], bins=10, ax=axs[0])
axs[0].set_title('Distribution of Listeners')
axs[0].set_xlabel('Listeners')
axs[0].set_ylabel('Frequency')

sns.histplot(d['Daily Trend'], bins=10, ax=axs[1])
axs[1].set_title('Distribution of Daily Trend')
axs[1].set_xlabel('Daily Trend')
axs[1].set_ylabel('Frequency')

sns.histplot(d['PkListeners'], bins=10, ax=axs[2])
axs[2].set_title('Distribution of Peak Listeners')
axs[2].set_xlabel('Peak Listeners')
axs[2].set_ylabel('Frequency')

plt.tight_layout()
plt.show()


# In[172]:


plt.figure(figsize=(20, 5))
sns.barplot(x='Artist', y='Listeners', data=d)
plt.title('Total Listeners by Artist')
plt.xlabel('Artist')
plt.ylabel('Total Listeners')
plt.xticks([0,500,1000,1500,2000,2500], [0,500,1000,1500,2000,2500])
plt.show()


# In[146]:


few_data = d.head(40)
plt.figure(figsize=(20, 8))
sns.barplot(x='Listeners', y='Artist', data=few_data)
plt.title('Total Listeners by Artist')
plt.xlabel('Artist')
plt.ylabel('Total Listeners')
plt.show()


# In[202]:


few_data = d.head(40)
plt.figure(figsize=(20,8))
sns.barplot(x = 'Artist', y = 'Daily Trend', data = few_data)
plt.title('Artists daily trend falling')
plt.xlabel('Daily Trend')
plt.ylabel('Artist')
plt.xticks([0,10,20,30,40], [0,10,20,30,40])
plt.show()


# In[215]:


number_one_data = d[d['Peak'] == 1]
number_one_count = number_one_data['Artist'].value_counts().reset_index()
number_one_count.columns = ['Artist', 'NumberOneCount']

plt.figure(figsize=(6, 4))
sns.barplot(x='Artist', y='NumberOneCount', data=number_one_count)
plt.title('Number of Days Each Artist was Ranked Number One')
plt.xlabel('Artist')
plt.ylabel('Number of Days Ranked Number One')
plt.tight_layout()
plt.show()


# ### Analysis of Listener Data
# 
# #### Dataset Overview
# The dataset provides insights into listener metrics across various artists, capturing data such as total listeners, daily trends, peak listeners, and rankings.
# 
# #### Data Cleaning and Preparation
# Upon loading the dataset, initial checks were conducted:
# - **Null Values**: No null values were found in any column, ensuring data completeness.
# - **Data Types**: Columns were appropriately cast to facilitate analysis; specifically, 'Listeners', 'Daily Trend', and 'PkListeners' were converted to integers after removing commas from numeric strings.
# 
# #### Descriptive Statistics
# Descriptive statistics revealed significant insights:
# - **Listeners**: The mean number of listeners across all artists was [mean value].
# - **Daily Trend**: Analysis of daily trends showed [insights from distribution].
# - **Peak Listeners**: [Description of peak listener distribution].
# 
# #### Visualizations
# A series of visualizations were crafted to illustrate key metrics:
# - **Histograms**: Histograms depicted the distribution of listeners, daily trends, and peak listeners, highlighting [specific observations].
# - **Bar Plots**: Bar plots were used to visualize:
#   - Total listeners by artist, showcasing [top performers].
#   - Listener trends by artist, emphasizing [insights into daily trends].
#   - Number of days each artist held the number one position, indicating [artist popularity metrics].
# 
# #### Conclusion
# This analysis provides a comprehensive view of listener metrics for the dataset. It highlights notable trends in listener behavior, identifies top-performing artists, and underscores the significance of daily listener trends and peak metrics. These insights are crucial for understanding artist performance dynamics and can inform strategic decisions in the music industry.
# 
# 
