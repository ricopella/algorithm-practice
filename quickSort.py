def quickSort(arr):
  if len(arr) < 2:
    return arr
  else: 
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i >= pivot]
    return quickSort(less) + [pivot] + quickSort(greater)

print(quickSort([3,6,2,8,9,1,4,5]))
print(quickSort([]))
print(quickSort([1]))
print(quickSort([2,1]))