#!/usr/bin/env python3
"""
Execute async_comprehension four times in parallel using asyncio.gather
and measure the total runtime.
"""

import time
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total runtime of four parallel async_comprehension calls."""
    start_time = time.time()

    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.time()

    return end_time - start_time
