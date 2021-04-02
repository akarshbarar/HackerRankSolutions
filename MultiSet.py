#!/bin/python3

import math
import os
import random
import re
import sys


class Multiset:
    def __init__(self):
        super().__init__()
        self.arr=[]
    def add(self, val):
        # adds one occurrence of val from the multiset, if any
        self.arr.append(val)
        pass

    def remove(self, val):
        # removes one occurrence of val from the multiset, if any
        if self.arr.count(val)!=0:
            return self.arr.remove(val)
        pass

    def __contains__(self, val):
        # returns True when val is in the multiset, else returns False
        return val in self.arr
    
    def __len__(self):
        # returns the number of elements in the multiset
        return len(self.arr)
if __name__ == '__main__':