#!/usr/bin/env python
# coding: utf-8

# In[84]:


pip install folium


# In[2]:


import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import folium


# In[3]:


d = pd.read_excel(r"C:\Users\rahul\Desktop\Monaco.xlsx")


# In[85]:


monaco_coords = [43.7347, 7.4206]
map_monaco = folium.Map(location=monaco_coords, zoom_start=15)
folium.Marker(
    location=monaco_coords,
    popup='Monaco Grand Prix Circuit',
    icon=folium.Icon(color='red', icon='info-sign')
).add_to(map_monaco)
map_monaco.save('monaco_grand_prix_map.html')
map_monaco


# In[27]:


d     # looking at the data set


# In[28]:


d.isnull().sum()    #checking missing vslues


# In[5]:


d.dtypes             #verifing data types


# In[6]:


duplicates = d.duplicated().sum()
duplicates                           # Duplicates


# In[29]:


d['Team '].str.upper().str.strip()             # Standardize team names, Found out Team column has space.
#d.columns


# In[30]:


d.rename(columns={'Team ': 'Team'}, inplace=True)
d.rename(columns={'Points': 'Points'}, inplace=True)         # Changing Team name
d


# In[31]:


d['Team'] = d['Team'].str.title()           # Capitalizing Team column
d


# In[32]:


d.describe()                  # Descriptive Statistics


# In[33]:


plt.figure(figsize=(6, 3))
sns.histplot(d['Points'])                     # Historgram graph of showing how many drivers have got 0 points
plt.title('Distribution of Points')
plt.xlabel('Points')
plt.ylabel('Frequency')
plt.show()


# In[34]:


top_drivers = d.sort_values(by='Points', ascending=False).head(10)           # Top drivers of 1st 10 drivers who  
top_drivers


# In[35]:


top_teams = d.groupby('Team')['Points'].sum().sort_values(ascending=False).reset_index()   #Top teams
top_teams


# In[14]:


correlation = d[['Position', 'Points']].corr()           # Correlation between position and points
correlation  


# In[15]:


print(d.columns)


# In[22]:


plt.figure(figsize=(15, 6))
df = d.sort_values(by='Points', ascending=False)
sns.barplot(x='Driver Name', y='Points', data=df)
plt.title('Total Points by Driver')
plt.xlabel('Driver Name')
plt.ylabel('Total Points')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()


# In[45]:


plt.figure(figsize=(15, 6))
sns.barplot(x='Team', y='Points', data=d, ci = None)
plt.title('Total Points of Team')
plt.xlabel('Team')
plt.xticks(rotation=45)
plt.ylabel('Top Team')
plt.tight_layout()
plt.show()


# In[54]:


plt.figure(figsize=(8,5))
sns.barplot(x='Points',y='Driver Name', data = d)
plt.title("Points by Driver")
plt.xlabel('Points')
plt.ylabel('Driver Name')
plt.show()


# In[59]:


plt.figure(figsize=(8,5))
sns.barplot(x = 'Points', y = 'Team', data =d , ci=None)
plt.title('Points by Teams')
plt.xlabel('Team')
plt.ylabel('Points')
plt.show()


# In[5]:


drivers = d['Driver Name']
points = d['Points']

plt.figure(figsize=(15, 10))
wedges, texts, autotexts = plt.pie(points, labels=None, autopct='%1.1f%%', startangle=360, colors=plt.cm.tab20.colors)

plt.legend(wedges, drivers, title="Drivers", loc="center left", bbox_to_anchor=(1, 0, 0.5, 1))
plt.title('Points by the Driver')
plt.axis('equal')
plt.show()


# ### Conclusion
# 
# In this analysis of the Monaco Race 2024 data, several key insights were uncovered regarding the drivers, teams, and their performances:
# 
# - **Top Performers**: Charles Leclerc emerged as the leading driver with 25 points, followed closely by Oscar Piastri with 18 points. Ferrari and McLaren Mercedes were the top-performing teams with 40 and 30 points, respectively.
# - **Distribution of Points**: A histogram of driver points revealed that a significant number of drivers did not score any points, highlighting the competitive nature of the race.
# - **Correlation Analysis**: There was a strong negative correlation (-0.857) between a driver's position and their points, indicating that higher positions correlated with lower points, which is expected in race standings.
# - **Visual Insights**: Visualizations such as bar plots and pie charts provided clear representations of points distribution among drivers and teams, offering a comprehensive overview of performance metrics.
# 
# This analysis not only provides a snapshot of individual and team performances but also serves as a foundation for understanding the dynamics of the Monaco Grand Prix 2024. These insights are crucial for strategic decision-making and further exploration in the realm of motorsports analytics.
# 
