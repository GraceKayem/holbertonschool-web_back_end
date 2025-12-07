#!/usr/bin/env python3
"""Write a type-annotated function to_kv that takes a string k and an int or
float v as arguments and returns a tuple. The first element of the tuple is the
string k, and the second element is the square of v as a float.
"""

import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """Returns a tuple containing k as the first element and
    v squared as a float as the second element.
    """
    return k, float(v ** 2)
