#!/usr/bin/env python3
"""Measure execution time of wait_n.
This module defines measure_time, a function that takes integers n and
max_delay, runs wait_n(n, max_delay), and returns the average run time.
"""

import time
import asyncio
from typing import Union

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Return the average execution time of wait_n."""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
