# --------------------------------------------------------
# A Sample Network Test Automation using Python & REST API
# --------------------------------------------------------

import requests
import json

MGA_IP = "192.168.2.70"
BASE_URL = f"http://{MGA_IP}/api/v1"

headers = {
    "Content-Type": "application/json"
}

# ---------------------------------------------------
# Configure Generator for 1000BASE-X with EEE (LPI)
# ---------------------------------------------------

generator_payload = {
    "header": [0xFF]*14,   # simple dummy ethernet header (14 bytes)
    "analyzer_port": 1,
    "maximum_packet_count": None,
    "maximum_duration": None,
    "payload": "FIXED",
    "payload_byte": 0xAA,
    "ipg": 12,
    "include_asf": False,
    
    # EEE SETTINGS
    "lpi_mode": True,
    "lpi_wake_timer_ns": 16000,   # 16us typical for 1000BASE-X
    "lpi_sleep_timer_ns": 20000,  # 20us example
    
    "trigger": None
}

response = requests.patch(
    f"{BASE_URL}/generators/1/",
    headers=headers,
    data=json.dumps(generator_payload)
)

print("Generator Config Response:")
print(response.status_code)
print(response.json())


# -----------------------------
# Start Generator
# -----------------------------

start_response = requests.post(
    f"{BASE_URL}/generators/1/start/",
    headers=headers
)

print("\nGenerator Start Response:")
print(start_response.status_code)
print(start_response.text)
