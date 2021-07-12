import pandas as pd
import numpy as np

with open('hints.txt',encoding='UTF-8') as f:
    df_hints = f.read().split('\t')

with open('actions.txt',encoding='UTF-8') as f:
    df_actions = f.read().split('\t')

hints = []
for row in df_hints:
    hints.append(row)

actions = []
for row in df_actions:
    actions.append(row) 

dlist = list(zip(actions,hints))
columns = ["Actions","Hints"]
df = pd.DataFrame(dlist,columns=columns)

try:
    df.to_csv("hintsAlgebra4.csv",columns=columns)
    print("Created file successfully.")
except:
    print("Didn't work, probably same file name.")


