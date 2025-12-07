#!/usr/bin/env python3
"""Write a type-annotated function sum_mixed_list which takes a list of
integers and floats and returns their sum as a float.
"""

import typing
import math


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """Returns the sum of a list of integers and floats as a float."""
    return math.fsum(mxd_lst)
