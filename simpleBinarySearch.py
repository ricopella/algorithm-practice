def binarySearch(arr, x):
  splitNum = int(len(arr) / 2)
  if x in arr[:splitNum]:
    return True
  return True if x in arr[splitNum:] else False

print(binarySearch([2,3,5,7,8,9], 2))